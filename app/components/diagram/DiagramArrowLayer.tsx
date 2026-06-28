import {
  FIELD_HEIGHT_M,
  FIELD_MARGIN_M,
  FIELD_WIDTH_M,
  type DiagramArrow,
  type DiagramPoint,
} from '@/lib/diagram';
import { getStroke } from 'perfect-freehand';
import { useCallback, useRef, useState, type PointerEvent, type RefObject } from 'react';
import type { ToolMode } from './types';

// perfect-freehand options for arrow strokes
const STROKE_OPTIONS = {
  size: 0.4, // stroke width in field metres
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
  simulatePressure: true,
};

/** Convert a perfect-freehand outline array to an SVG path `d` string. */
function outlineToPath(outline: number[][]): string {
  if (outline.length < 2) return '';
  const [first, ...rest] = outline;
  const d = [`M ${first[0]} ${first[1]}`];
  for (const [x, y] of rest) {
    d.push(`L ${x} ${y}`);
  }
  d.push('Z');
  return d.join(' ');
}

/** Convert SVG client coords to viewBox coords. */
function clientToViewBox(svg: SVGSVGElement, clientX: number, clientY: number): DiagramPoint {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
  return { x: svgPt.x, y: svgPt.y };
}

interface Props {
  arrows: DiagramArrow[];
  tool: ToolMode;
  svgRef: RefObject<SVGSVGElement | null>;
  viewboxW: number;
  viewboxH: number;
  onStrokeComplete: (points: DiagramPoint[]) => void;
  onRemoveArrow: (id: string) => void;
}

export default function DiagramArrowLayer({ arrows, tool, svgRef, onStrokeComplete }: Props) {
  const [activePoints, setActivePoints] = useState<DiagramPoint[]>([]);
  const isDrawing = useRef(false);

  const handlePointerDown = useCallback(
    (e: PointerEvent<SVGElement>) => {
      if (tool !== 'pen') return;
      e.preventDefault();
      (e.target as SVGElement).setPointerCapture(e.pointerId);
      isDrawing.current = true;
      const svg = svgRef.current;
      if (!svg) return;
      const pt = clientToViewBox(svg, e.clientX, e.clientY);
      setActivePoints([pt]);
    },
    [tool, svgRef]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent<SVGElement>) => {
      if (!isDrawing.current || tool !== 'pen') return;
      e.preventDefault();
      const svg = svgRef.current;
      if (!svg) return;
      const pt = clientToViewBox(svg, e.clientX, e.clientY);
      setActivePoints((prev) => [...prev, pt]);
    },
    [tool, svgRef]
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent<SVGElement>) => {
      if (!isDrawing.current || tool !== 'pen') return;
      e.preventDefault();
      isDrawing.current = false;
      setActivePoints((prev) => {
        if (prev.length >= 2) {
          onStrokeComplete(prev);
        }
        return [];
      });
    },
    [tool, onStrokeComplete]
  );

  // Render a completed arrow: freehand stroke body + arrowhead line at the end
  const renderArrow = (arrow: DiagramArrow) => {
    if (arrow.points.length < 2) return null;
    const pts = arrow.points.map((p) => [p.x, p.y, 0.5]);
    const outline = getStroke(pts, STROKE_OPTIONS);
    const d = outlineToPath(outline);

    // Arrowhead: last two points define direction
    const last = arrow.points[arrow.points.length - 1];
    const prev = arrow.points[arrow.points.length - 2];
    const dx = last.x - prev.x;
    const dy = last.y - prev.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    const tipX = last.x + (dx / len) * 0.6;
    const tipY = last.y + (dy / len) * 0.6;

    return (
      <g key={arrow.id}>
        <path d={d} fill="#333" opacity={0.85} />
        {/* Arrowhead */}
        <line
          x1={last.x}
          y1={last.y}
          x2={tipX}
          y2={tipY}
          stroke="#333"
          strokeWidth={0.3}
          markerEnd="url(#arrowhead)"
        />
      </g>
    );
  };

  // Render the in-progress stroke
  const renderActive = () => {
    if (activePoints.length < 2) return null;
    const pts = activePoints.map((p) => [p.x, p.y, 0.5]);
    const outline = getStroke(pts, STROKE_OPTIONS);
    const d = outlineToPath(outline);
    return <path d={d} fill="#333" opacity={0.6} />;
  };

  return (
    <g
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      // Transparent full-field rect to capture pointer events when pen tool is active
      style={{ pointerEvents: tool === 'pen' ? 'all' : 'none' }}
    >
      {tool === 'pen' && (
        <rect
          x={-FIELD_MARGIN_M}
          y={-FIELD_MARGIN_M}
          width={FIELD_WIDTH_M + 2 * FIELD_MARGIN_M}
          height={FIELD_HEIGHT_M + 2 * FIELD_MARGIN_M}
          fill="transparent"
        />
      )}
      {arrows.map(renderArrow)}
      {renderActive()}
    </g>
  );
}
