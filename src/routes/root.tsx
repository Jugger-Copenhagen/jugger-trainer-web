import AppBar from '@/components/AppBar';
import { auth } from '@/lib/firebase';
import { useToastStore, useUserStore } from '@/lib/store';
import '@/routes/root.css';
import { Alert, Box, Container, CssBaseline, Snackbar, ThemeProvider, createTheme } from '@mui/material';
import { green, pink, purple } from '@mui/material/colors';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const userStore = useUserStore();
  const toast = useToastStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      void userStore.setUser(user);
    });
  }, [userStore]);

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: pink[500],
      },
      error: {
        main: purple[600],
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar />

      <Box component="main">
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Box>

      <Snackbar open={toast.message !== null} autoHideDuration={6000} onClose={toast.clearToast}>
        <Alert onClose={toast.clearToast} severity={toast.severity} variant="filled" sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
