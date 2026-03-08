import AppBar from '@/components/AppBar';
import { pageTitle } from '@/lib/copy';
import { auth } from '@/lib/firebase';
import { useToastStore, useUserStore } from '@/lib/store';
import {
  Alert,
  Box,
  Container,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { green, pink, purple } from '@mui/material/colors';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './root.css';

const { BASE_URL } = import.meta.env;

export function links() {
  return [
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${BASE_URL}apple-touch-icon.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${BASE_URL}favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${BASE_URL}favicon-16x16.png` },
    { rel: 'manifest', href: `${BASE_URL}site.webmanifest` },
    { rel: 'mask-icon', href: `${BASE_URL}safari-pinned-tab.svg`, color: '#5bbad5' },
  ];
}

export function meta() {
  return [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'msapplication-TileColor', content: '#603cba' },
    { name: 'theme-color', content: '#ffffff' },
    { title: pageTitle() },
    { name: 'description', content: 'Find jugger exercises and plan your training sessions' },
  ];
}

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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar />
      <Box component="main">
        <Container maxWidth={false}>
          <p>Loading...</p>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default function Root() {
  const userStore = useUserStore();
  const toast = useToastStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      void userStore.setUser(user);
    });
  }, [userStore]);

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
        <Alert
          onClose={toast.clearToast}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
