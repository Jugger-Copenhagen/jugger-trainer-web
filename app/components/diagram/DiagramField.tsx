import {
  type Diagram,
  FIELD_HEIGHT_M,
  FIELD_MARGIN_M,
  FIELD_WIDTH_M,
  octagonPoints,
} from '@/lib/diagram';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { useRef } from 'react';
import DiagramArrowLayer from './DiagramArrowLayer';
import DiagramPlayerNode from './DiagramPlayerNode';
import type { ToolMode } from './types';

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

  const xMin = -FIELD_MARGIN_M;
  const yMin = -FIELD_MARGIN_M;
  const xMax = FIELD_WIDTH_M + FIELD_MARGIN_M;
  const yMax = FIELD_HEIGHT_M + FIELD_MARGIN_M;
  const w = xMax - xMin;
  const h = yMax - yMin;
  const fieldShape = diagram.field === 'octagon' ? octagonPoints() : null;

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
        cursor: tool === 'pen' ? 'pointer' : 'default',
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`${xMin} ${yMin} ${w} ${h}`}
        style={{ width: '100%', height: '100%', display: 'block' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Arrowhead marker */}
          <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <path d="M0,0 L0,4 L4,2 z" fill="#333" />
          </marker>
        </defs>

        {/* Field background */}
        {fieldShape ? (
          <polygon
            points={fieldShape}
            fill="#4caf50"
            opacity={0.25}
            stroke="#388e3c"
            strokeWidth={0.15}
          />
        ) : (
          <rect x={xMin} y={yMin} width={w} height={h} fill="#4caf50" opacity={0.25} />
        )}

        {/* Centre line */}
        {diagram.field === 'octagon' && (
          <line
            x1={FIELD_WIDTH_M / 2}
            y1={0}
            x2={FIELD_WIDTH_M / 2}
            y2={FIELD_HEIGHT_M}
            stroke="#388e3c"
            strokeWidth={0.1}
            strokeDasharray="0.35 0.35"
            opacity={0.6}
          />
        )}

        {/* Arrows */}
        <DiagramArrowLayer
          arrows={diagram.arrows}
          tool={tool}
          svgRef={svgRef}
          viewboxW={FIELD_WIDTH_M + 2 * FIELD_MARGIN_M}
          viewboxH={FIELD_HEIGHT_M + 2 * FIELD_MARGIN_M}
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
            viewboxW={FIELD_WIDTH_M + 2 * FIELD_MARGIN_M}
            viewboxH={FIELD_HEIGHT_M + 2 * FIELD_MARGIN_M}
            onSelect={() => onSelectPlayer(player.id)}
            onRemove={() => onRemovePlayer(player.id)}
          />
        ))}
      </svg>
    </Box>
  );
}
