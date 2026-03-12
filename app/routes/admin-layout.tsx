import { useToastStore, useUserStore } from '@/lib/store';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { Outlet, redirect, useLocation, useNavigate } from 'react-router';

export function clientLoader() {
  const { profile } = useUserStore.getState();

  if (profile?.role !== 'admin') {
    useToastStore.getState().setToast('You are not authorized to access that page.', 'error');
    throw redirect('/');
  }

  return null;
}

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabValue = location.pathname.endsWith('/tags') ? '/admin/tags' : '/admin';

  return (
    <Box>
      <Typography component="h2" variant="h4" sx={{ mt: 2 }}>
        Admin
      </Typography>
      <Tabs
        value={tabValue}
        onChange={(_evt, newValue) => navigate(newValue)}
        sx={{ mb: 2 }}
      >
        <Tab label="Dashboard" value="/admin" />
        <Tab label="Tags" value="/admin/tags" />
      </Tabs>
      <Outlet />
    </Box>
  );
}
