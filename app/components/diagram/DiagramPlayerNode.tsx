import { TEAMS, positionIconUrl, type DiagramPlayer } from '@/lib/diagram';
import { useDraggable } from '@dnd-kit/core';
import type { RefObject } from 'react';
import type { ToolMode } from './types';

// Player circle radius in field metres
const PLAYER_RADIUS = 0.9;

interface Props {
  player: DiagramPlayer;
  isSelected: boolean;
  tool: ToolMode;
  svgRef: RefObject<SVGSVGElement | null>;
  viewboxW: number;
  viewboxH: number;
  onSelect: () => void;
  onRemove: () => void;
}

export default function DiagramPlayerNode({
  player,
  isSelected,
  tool,
  svgRef,
  onSelect,
  onRemove,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableRef,
    transform,
    isDragging,
  } = useDraggable({
    id: player.id,
    data: { type: 'placed-player', playerId: player.id },
    disabled: tool !== 'select',
  });
  // useDraggable expects an HTMLElement ref, but we attach to an SVG <g>.
  // The underlying usage is compatible at runtime; cast to satisfy TypeScript.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setNodeRef = setDraggableRef as (node: any) => void;

  const teamConfig = TEAMS[player.team];
  const iconUrl = positionIconUrl(player.position);

  // Apply drag transform: convert pixel delta to viewBox metres using the SVG's current scale
  let dx = 0;
  let dy = 0;
  if (transform && svgRef.current) {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const scaleX = (svg.viewBox.baseVal.width || 40) / rect.width;
    const scaleY = (svg.viewBox.baseVal.height || 20) / rect.height;
    dx = transform.x * scaleX;
    dy = transform.y * scaleY;
  }

  const cx = player.x + dx;
  const cy = player.y + dy;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (tool === 'select') {
      onSelect();
    }
  };

  return (
    <g
      ref={setNodeRef}
      transform={`translate(${cx}, ${cy})`}
      onClick={handleClick}
      style={{
        cursor: tool === 'select' ? 'grab' : 'default',
        opacity: isDragging ? 0.5 : 1,
        pointerEvents: tool === 'pen' ? 'none' : 'all',
      }}
      {...(tool === 'select' ? { ...listeners, ...attributes } : {})}
    >
      {/* Selection ring */}
      {isSelected && (
        <circle r={PLAYER_RADIUS + 0.25} fill="none" stroke="#FFD700" strokeWidth={0.2} />
      )}

      {/* Team-colored disc */}
      <circle r={PLAYER_RADIUS} fill={teamConfig.bg} stroke={teamConfig.fg} strokeWidth={0.1} />

      {/* Position icon via SVG image */}
      <image
        href={iconUrl}
        x={-PLAYER_RADIUS * 0.65}
        y={-PLAYER_RADIUS * 0.65}
        width={PLAYER_RADIUS * 1.3}
        height={PLAYER_RADIUS * 1.3}
        style={{ filter: `invert(1) brightness(10)` }}
        preserveAspectRatio="xMidYMid meet"
      />

      {/* Remove button when selected */}
      {isSelected && tool === 'select' && (
        <g
          transform={`translate(${PLAYER_RADIUS * 0.75}, ${-PLAYER_RADIUS * 0.75})`}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={{ cursor: 'pointer' }}
        >
          <circle r={0.4} fill="#d32f2f" />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={0.55}
            fill="white"
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          >
            ×
          </text>
        </g>
      )}
    </g>
  );
}
