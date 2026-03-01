import { useToastStore, useUserStore } from '@/lib/store';
import { Typography } from '@mui/material';
import { redirect } from 'react-router';

export function clientLoader() {
  const { profile } = useUserStore.getState();

  if (profile?.role !== 'admin') {
    useToastStore.getState().setToast('You are not authorized to access that page.', 'error');
    throw redirect('/');
  }

  return null;
}

export default function Admin() {
  return (
    <Typography component="h2" variant="h4" sx={{ mt: 2 }}>
      Admin
    </Typography>
  );
}
