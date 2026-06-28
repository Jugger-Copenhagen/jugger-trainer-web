import {
  FIELD_HEIGHT_M,
  FIELD_WIDTH_M,
  clampToField,
  emptyDiagram,
  type Diagram,
  type DiagramArrow,
  type DiagramPlayer,
  type PositionType,
  type TeamId,
} from '@/lib/diagram';
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { ContentCopy } from '@mui/icons-material';
import { Box, Collapse, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { useCallback, useEffect, useReducer, useRef } from 'react';
import DiagramField, { FIELD_DROPPABLE_ID } from './DiagramField';
import PositionPalette from './PositionPalette';
import Toolbar from './Toolbar';
import type { ToolMode } from './types';

// === State & reducer === //

type EditorState = {
  diagram: Diagram;
  tool: ToolMode;
  selectedPlayerId: string | null;
};

type EditorAction =
  | { type: 'SET_TOOL'; tool: ToolMode }
  | { type: 'SET_FIELD_SHAPE'; shape: 'octagon' | 'none' }
  | { type: 'ADD_PLAYER'; player: DiagramPlayer }
  | { type: 'MOVE_PLAYER'; id: string; x: number; y: number }
  | { type: 'REMOVE_PLAYER'; id: string }
  | { type: 'SELECT_PLAYER'; id: string | null }
  | { type: 'ADD_ARROW'; arrow: DiagramArrow }
  | { type: 'REMOVE_ARROW'; id: string }
  | { type: 'CLEAR_ALL' };

function reducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'SET_TOOL':
      return { ...state, tool: action.tool, selectedPlayerId: null };
    case 'SET_FIELD_SHAPE':
      return { ...state, diagram: { ...state.diagram, field: action.shape } };
    case 'ADD_PLAYER':
      return {
        ...state,
        diagram: { ...state.diagram, players: [...state.diagram.players, action.player] },
      };
    case 'MOVE_PLAYER':
      return {
        ...state,
        diagram: {
          ...state.diagram,
          players: state.diagram.players.map((p) =>
            p.id === action.id ? { ...p, x: action.x, y: action.y } : p
          ),
        },
      };
    case 'REMOVE_PLAYER':
      return {
        ...state,
        selectedPlayerId: state.selectedPlayerId === action.id ? null : state.selectedPlayerId,
        diagram: {
          ...state.diagram,
          players: state.diagram.players.filter((p) => p.id !== action.id),
        },
      };
    case 'SELECT_PLAYER':
      return { ...state, selectedPlayerId: action.id };
    case 'ADD_ARROW':
      return {
        ...state,
        diagram: { ...state.diagram, arrows: [...state.diagram.arrows, action.arrow] },
      };
    case 'REMOVE_ARROW':
      return {
        ...state,
        diagram: {
          ...state.diagram,
          arrows: state.diagram.arrows.filter((a) => a.id !== action.id),
        },
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        selectedPlayerId: null,
        diagram: { ...state.diagram, players: [], arrows: [] },
      };
    default:
      return state;
  }
}

const initialState: EditorState = {
  diagram: emptyDiagram(),
  tool: 'select',
  selectedPlayerId: null,
};

// === Helpers === //

let _nextId = 1;
function nextId(prefix: string) {
  return `${prefix}-${_nextId++}`;
}

// === Component === //

export default function DiagramEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { diagram, tool, selectedPlayerId } = state;

  // Keyboard: Delete key removes selected player
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedPlayerId) {
        // Don't fire if focus is in an input
        if (document.activeElement?.tagName === 'INPUT') return;
        dispatch({ type: 'REMOVE_PLAYER', id: selectedPlayerId });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedPlayerId]);

  // DnD sensors — use PointerSensor with a small activation distance to
  // distinguish clicks from drags.
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  // We need the SVG's current dimensions to convert pixel drag deltas to field coords.
  // The field SVG uses a viewBox, so we read the bounding rect at drag-end time.
  const fieldBoxRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over, delta } = event;
      if (!over) return;

      const activeData = active.data.current as
        | { type: 'palette-item'; position: PositionType; team: TeamId }
        | { type: 'placed-player'; playerId: string }
        | undefined;

      if (!activeData) return;

      // Find the SVG element to convert pixel coords to field metres
      const svgEl = fieldBoxRef.current?.querySelector('svg');
      if (!svgEl) return;
      const rect = svgEl.getBoundingClientRect();
      const scaleX = FIELD_WIDTH_M / rect.width;
      const scaleY = FIELD_HEIGHT_M / rect.height;

      if (activeData.type === 'palette-item' && over.id === FIELD_DROPPABLE_ID) {
        // Drop from palette onto field: use the drop point from the over rect centre
        // plus the drag delta from the initial position of the draggable.
        // @dnd-kit doesn't give us the absolute drop point directly, so we use
        // the pointer position via the active.rect.
        const activeRect = active.rect.current.translated;
        if (!activeRect) return;
        // Centre of the dragged item in screen coords
        const itemCentreX = activeRect.left + activeRect.width / 2;
        const itemCentreY = activeRect.top + activeRect.height / 2;
        // Convert to field metres
        const fx = (itemCentreX - rect.left) * scaleX;
        const fy = (itemCentreY - rect.top) * scaleY;
        const clamped = clampToField(fx, fy);
        dispatch({
          type: 'ADD_PLAYER',
          player: {
            id: nextId('player'),
            position: activeData.position,
            team: activeData.team,
            x: clamped.x,
            y: clamped.y,
          },
        });
      } else if (activeData.type === 'placed-player' && over.id === FIELD_DROPPABLE_ID) {
        // Move existing player
        const player = diagram.players.find((p) => p.id === activeData.playerId);
        if (!player) return;
        const newX = player.x + delta.x * scaleX;
        const newY = player.y + delta.y * scaleY;
        const clamped = clampToField(newX, newY);
        dispatch({ type: 'MOVE_PLAYER', id: activeData.playerId, x: clamped.x, y: clamped.y });
      }
    },
    [diagram.players]
  );

  const handleStrokeComplete = useCallback((points: { x: number; y: number }[]) => {
    dispatch({
      type: 'ADD_ARROW',
      arrow: { id: nextId('arrow'), points },
    });
  }, []);

  const handleCopyJson = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(diagram, null, 2));
  }, [diagram]);

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Toolbar */}
        <Toolbar
          tool={tool}
          fieldShape={diagram.field}
          onToolChange={(t) => dispatch({ type: 'SET_TOOL', tool: t })}
          onFieldShapeChange={(shape) => dispatch({ type: 'SET_FIELD_SHAPE', shape })}
          onClearAll={() => dispatch({ type: 'CLEAR_ALL' })}
        />

        {/* Main editor area */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Palette */}
          <Paper variant="outlined" sx={{ p: 1.5, flexShrink: 0, minWidth: 200 }}>
            <Typography variant="h6" color="text.primary" sx={{ display: 'block', mb: 1 }}>
              Drag onto field
            </Typography>
            <PositionPalette />
          </Paper>

          {/* Field */}
          <Box ref={fieldBoxRef} sx={{ flex: 1, minWidth: 300 }}>
            <DiagramField
              diagram={diagram}
              tool={tool}
              selectedPlayerId={selectedPlayerId}
              onSelectPlayer={(id) => dispatch({ type: 'SELECT_PLAYER', id })}
              onRemovePlayer={(id) => dispatch({ type: 'REMOVE_PLAYER', id })}
              onStrokeComplete={handleStrokeComplete}
              onRemoveArrow={(id) => dispatch({ type: 'REMOVE_ARROW', id })}
            />
          </Box>
        </Box>

        {/* JSON debug panel */}
        <Collapse in>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}
            >
              <Typography variant="caption" color="text.secondary">
                Diagram JSON
              </Typography>
              <Tooltip title="Copy JSON">
                <IconButton size="small" onClick={handleCopyJson} aria-label="Copy diagram JSON">
                  <ContentCopy fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              component="pre"
              sx={{
                m: 0,
                p: 1,
                bgcolor: 'grey.100',
                borderRadius: 1,
                fontSize: '0.7rem',
                overflowX: 'auto',
                maxHeight: 200,
                overflowY: 'auto',
              }}
            >
              {JSON.stringify(diagram, null, 2)}
            </Box>
          </Paper>
        </Collapse>
      </Box>
    </DndContext>
  );
}
