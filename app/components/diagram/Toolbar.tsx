import { Delete, GestureOutlined, TouchApp } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material';
import type { ToolMode } from './types';

interface Props {
  tool: ToolMode;
  fieldShape: 'octagon' | 'none';
  onToolChange: (tool: ToolMode) => void;
  onFieldShapeChange: (shape: 'octagon' | 'none') => void;
  onClearAll: () => void;
}

export default function Toolbar({
  tool,
  fieldShape,
  onToolChange,
  onFieldShapeChange,
  onClearAll,
}: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
      <ToggleButtonGroup
        value={tool}
        exclusive
        size="small"
        onChange={(_, value: ToolMode | null) => {
          if (value !== null) onToolChange(value);
        }}
        aria-label="Editor tool"
      >
        <ToggleButton value="select" aria-label="Select / move">
          <Tooltip title="Select / move players">
            <TouchApp fontSize="small" />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="pen" aria-label="Draw arrow">
          <Tooltip title="Draw arrow (freehand)">
            <GestureOutlined fontSize="small" />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider orientation="vertical" flexItem />

      <FormControlLabel
        control={
          <Switch
            checked={fieldShape === 'octagon'}
            onChange={(e) => onFieldShapeChange(e.target.checked ? 'octagon' : 'none')}
            size="small"
          />
        }
        label="Show field"
      />

      <Divider orientation="vertical" flexItem />

      <Tooltip title="Clear all players and arrows">
        <Button
          size="small"
          color="error"
          variant="outlined"
          startIcon={<Delete fontSize="small" />}
          onClick={onClearAll}
        >
          Clear
        </Button>
      </Tooltip>
    </Box>
  );
}
