import {
  POSITION_LABELS,
  TEAMS,
  TEAM_IDS,
  positionIconUrl,
  type PositionType,
  type TeamId,
} from '@/lib/diagram';
import { useDraggable } from '@dnd-kit/core';
import { Box, Tooltip, Typography } from '@mui/material';

interface PaletteItemProps {
  position: PositionType;
  team: TeamId;
}

function PaletteItem({ position, team }: PaletteItemProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${position}-${team}`,
    data: { type: 'palette-item', position, team },
  });

  const teamConfig = TEAMS[team];
  const iconUrl = positionIconUrl(position);
  const label = `${POSITION_LABELS[position]} - ${teamConfig.label}`;

  return (
    <Tooltip title={label} placement="top" arrow>
      <Box
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        sx={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          bgcolor: teamConfig.bg,
          border: '2px solid',
          borderColor: teamConfig.fg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'grab',
          opacity: isDragging ? 0.4 : 1,
          flexShrink: 0,
          '&:hover': { opacity: 0.8 },
          '&:active': { cursor: 'grabbing' },
        }}
        aria-label={label}
      >
        <Box
          component="img"
          src={iconUrl}
          alt={POSITION_LABELS[position]}
          sx={{
            width: 22,
            height: 22,
            filter: 'invert(1) brightness(10)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      </Box>
    </Tooltip>
  );
}

export default function PositionPalette() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {TEAM_IDS.map((team) => (
        <Box key={team}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
            {TEAMS[team].label}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {TEAMS[team].positions.map((position) => (
              <PaletteItem key={`${position}-${team}`} position={position} team={team} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
