import { z } from 'zod';

// === FIELD DIMENSIONS === //

export const FIELD_WIDTH_M = 40;
export const FIELD_HEIGHT_M = 20;

// The jugger pitch is a 40x20m octagon. The corners are cut at 45°.
// The cut length along each axis is 5m (i.e. the diagonal cut spans 5m × 5m).
export const FIELD_CORNER_CUT_M = 5;

// === TEAMS === //

export const TEAM_IDS = ['team1', 'team2'] as const;
export type TeamId = (typeof TEAM_IDS)[number];

// WCAG AA compliant against white text (contrast ≥ 4.5:1)
export const TEAM_COLORS: Record<TeamId, { bg: string; fg: string; label: string }> = {
  team1: { bg: '#20BCBA', fg: '#29221F', label: 'Blue' }, // MUI blue[800] — contrast 7.0:1
  team2: { bg: '#EF3B4F', fg: '#29221F', label: 'Red' }, // MUI deepOrange[900] — contrast 4.6:1
};

// === POSITIONS === //

export const POSITION_TYPES = [
  'antichain',
  'chain',
  'longsword',
  'qtip',
  'qwik',
  'ref-goal',
  'ref-head',
  'ref-line',
  'shield',
  'staff',
] as const;

export type PositionType = (typeof POSITION_TYPES)[number];

export const POSITION_LABELS: Record<PositionType, string> = {
  antichain: 'Antichain',
  chain: 'Chain',
  longsword: 'Longsword',
  qtip: 'Q-tip',
  qwik: 'Qwik',
  'ref-goal': 'Ref (goal)',
  'ref-head': 'Ref (head)',
  'ref-line': 'Ref (line)',
  shield: 'Shield',
  staff: 'Staff',
};

export function positionIconUrl(position: PositionType): string {
  const { BASE_URL } = import.meta.env;
  return `${BASE_URL}images/diagrams/positions/${position}.svg`;
}

// === DATA MODEL === //

const PointSchema = z.object({ x: z.number(), y: z.number() });

export const DiagramPlayerSchema = z.object({
  id: z.string(),
  position: z.enum(POSITION_TYPES),
  team: z.enum(TEAM_IDS),
  /** Position in field metres, origin at top-left. */
  x: z.number(),
  y: z.number(),
});

export const DiagramArrowSchema = z.object({
  id: z.string(),
  /** Raw stroke points in field metres. */
  points: z.array(PointSchema),
});

export const DiagramSchema = z.object({
  field: z.enum(['octagon', 'none']),
  players: z.array(DiagramPlayerSchema),
  arrows: z.array(DiagramArrowSchema),
});

export type DiagramPoint = z.infer<typeof PointSchema>;
export type DiagramPlayer = z.infer<typeof DiagramPlayerSchema>;
export type DiagramArrow = z.infer<typeof DiagramArrowSchema>;
export type Diagram = z.infer<typeof DiagramSchema>;

export function emptyDiagram(): Diagram {
  return { field: 'octagon', players: [], arrows: [] };
}

// === COORDINATE HELPERS === //

/**
 * Convert a point in SVG/screen pixels (relative to the SVG element's top-left)
 * to field metres, given the rendered pixel dimensions of the field.
 */
export function screenToField(
  sx: number,
  sy: number,
  svgWidth: number,
  svgHeight: number
): DiagramPoint {
  return {
    x: (sx / svgWidth) * FIELD_WIDTH_M,
    y: (sy / svgHeight) * FIELD_HEIGHT_M,
  };
}

/**
 * Convert a point in field metres to SVG pixels.
 */
export function fieldToScreen(
  fx: number,
  fy: number,
  svgWidth: number,
  svgHeight: number
): DiagramPoint {
  return {
    x: (fx / FIELD_WIDTH_M) * svgWidth,
    y: (fy / FIELD_HEIGHT_M) * svgHeight,
  };
}

/** Clamp a field coordinate to the field bounds. */
export function clampToField(x: number, y: number): DiagramPoint {
  return {
    x: Math.max(0, Math.min(FIELD_WIDTH_M, x)),
    y: Math.max(0, Math.min(FIELD_HEIGHT_M, y)),
  };
}

// === OCTAGON PATH === //

/**
 * Returns an SVG polygon `points` string for the 40×20m octagon,
 * scaled to the given pixel dimensions.
 */
export function octagonPoints(svgWidth: number, svgHeight: number): string {
  const scaleX = svgWidth / FIELD_WIDTH_M;
  const scaleY = svgHeight / FIELD_HEIGHT_M;
  const cx = FIELD_CORNER_CUT_M * scaleX;
  const cy = FIELD_CORNER_CUT_M * scaleY;
  const w = svgWidth;
  const h = svgHeight;
  return [
    [cx, 0],
    [w - cx, 0],
    [w, cy],
    [w, h - cy],
    [w - cx, h],
    [cx, h],
    [0, h - cy],
    [0, cy],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(' ');
}
