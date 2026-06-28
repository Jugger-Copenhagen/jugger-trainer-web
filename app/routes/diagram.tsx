import DiagramEditor from '@/components/diagram/DiagramEditor';
import { pageTitle } from '@/lib/copy';
import { Box, Typography } from '@mui/material';

export function meta() {
  return [{ title: pageTitle('Diagram Editor') }];
}

export default function DiagramRoute() {
  return (
    <Box>
      <Typography variant="h5" component="h1" gutterBottom>
        Diagram Editor
      </Typography>
      <DiagramEditor />
    </Box>
  );
}
