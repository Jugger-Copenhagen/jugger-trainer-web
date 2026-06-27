import { useDroppable } from '@dnd-kit/core';
import { type Diagram, octagonPoints } from '@/lib/diagram';
import { Box } from '@mui/material';
import { useRef } from 'react';
import DiagramArrowLayer from './DiagramArrowLayer';
import DiagramPlayerNode from './DiagramPlayerNode';
import type { ToolMode } from './types';

// The field renders at a fixed aspect ratio: 40:20 = 2:1.
// We use a viewBox matching field metres so all coordinates are in metres.
export const FIELD_VIEWBOX_W = 40;
export const FIELD_VIEWBOX_H = 20;

export const FIELD_DROPPABLE_ID = 'diagram-field';

interface Props {
  diagram: Diagram;
  tool: ToolMode;
  selectedPlayerId: string | null;
  onSelectPlayer: (id: string | null) => void;
  onRemovePlayer: (id: string) => void;
  onStrokeComplete: (points: { x: number; y: number }[]) => void;
  onRemoveArrow: (id: string) => void;
}

export default function DiagramField({
  diagram,
  tool,
  selectedPlayerId,
  onSelectPlayer,
  onRemovePlayer,
  onStrokeComplete,
  onRemoveArrow,
}: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: FIELD_DROPPABLE_ID });
  const svgRef = useRef<SVGSVGElement>(null);

  const fieldShape = diagram.field === 'octagon' ? octagonPoints(FIELD_VIEWBOX_W, FIELD_VIEWBOX_H) : null;

  return (
    <Box
      ref={setNodeRef}
      sx={{
        width: '100%',
        aspectRatio: '2 / 1',
        border: '2px solid',
        borderColor: isOver ? 'primary.main' : 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'grey.100',
        cursor: tool === 'pen' ? 'crosshair' : tool === 'erase' ? 'cell' : 'default',
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${FIELD_VIEWBOX_W} ${FIELD_VIEWBOX_H}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Arrowhead marker */}
          <marker
            id="arrowhead"
            markerWidth="4"
            markerHeight="4"
            refX="3"
            refY="2"
            orient="auto"
          >
            <path d="M0,0 L0,4 L4,2 z" fill="#333" />
          </marker>
          {/* Clip to field shape */}
          {fieldShape && (
            <clipPath id="field-clip">
              <polygon points={fieldShape} />
            </clipPath>
          )}
        </defs>

        {/* Field background */}
        {fieldShape ? (
          <polygon points={fieldShape} fill="#4caf50" opacity={0.25} stroke="#388e3c" strokeWidth={0.15} />
        ) : (
          <rect x={0} y={0} width={FIELD_VIEWBOX_W} height={FIELD_VIEWBOX_H} fill="#4caf50" opacity={0.15} />
        )}

        {/* Centre line */}
        <line
          x1={FIELD_VIEWBOX_W / 2}
          y1={0}
          x2={FIELD_VIEWBOX_W / 2}
          y2={FIELD_VIEWBOX_H}
          stroke="#388e3c"
          strokeWidth={0.1}
          strokeDasharray="0.5 0.5"
          opacity={0.6}
        />

        {/* Arrows */}
        <DiagramArrowLayer
          arrows={diagram.arrows}
          tool={tool}
          svgRef={svgRef}
          viewboxW={FIELD_VIEWBOX_W}
          viewboxH={FIELD_VIEWBOX_H}
          onStrokeComplete={onStrokeComplete}
          onRemoveArrow={onRemoveArrow}
        />

        {/* Players */}
        {diagram.players.map((player) => (
          <DiagramPlayerNode
            key={player.id}
            player={player}
            isSelected={selectedPlayerId === player.id}
            tool={tool}
            svgRef={svgRef}
            viewboxW={FIELD_VIEWBOX_W}
            viewboxH={FIELD_VIEWBOX_H}
            onSelect={() => onSelectPlayer(player.id)}
            onRemove={() => onRemovePlayer(player.id)}
          />
        ))}
      </svg>
    </Box>
  );
}
