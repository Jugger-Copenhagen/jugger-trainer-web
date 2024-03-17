import { auth } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import '@/routes/root.css';
import { Favorite, FavoriteBorder, Login } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  List,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Root() {
  const { pathname } = useLocation();
  const userStore = useUserStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      userStore.setUser(user);
    });
  }, []);

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: pink[500],
      },
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ width: '100vw' }}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            <Link to="/">Jugger Trainer</Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <List component="nav">
            <Link to="/exercises/favorited">
              <IconButton color="inherit" sx={{ mr: 1 }}>
                {pathname === '/exercises/favorited' ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Link>

            {userStore.user === null && (
              <Link to="/login">
                <Button variant="contained">
                  Sign In
                  <Login />
                </Button>
              </Link>
            )}
          </List>
        </Toolbar>
      </AppBar>

      <Box component="main">
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
