import smolLogoUrl from '@/assets/smolll_logo.png';
import { auth } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import '@/routes/root.css';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  List,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  const userStore = useUserStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      userStore.setUser(user);
    });
  }, []);

  /*
  async function logout() {
    await auth.signOut();
    navigate('/login');
  }
  */

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
          <img src={smolLogoUrl}></img>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            <Link to="/">Jugger Trainer</Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <List component="nav"></List>
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
