import DiagramEditor from '@/components/diagram/DiagramEditor';
import { pageTitle } from '@/lib/copy';
import { useToastStore, useUserStore } from '@/lib/store';
import { Box, Typography } from '@mui/material';
import { redirect } from 'react-router';

export function meta() {
  return [{ title: pageTitle('Diagram Editor') }];
}

export function clientLoader() {
  const { profile } = useUserStore.getState();

  if (profile?.role !== 'admin') {
    useToastStore.getState().setToast('You are not authorized to access that page.', 'error');
    throw redirect('/');
  }

  return null;
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
