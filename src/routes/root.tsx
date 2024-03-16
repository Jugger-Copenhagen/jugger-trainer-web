import { Favorite, Home } from '@mui/icons-material';
import {
  AppBar,
  Box,
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
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
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
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to="/">Jugger Trainer</Link>
          </Typography>

          <List component="nav">
            <IconButton color="inherit">
              <Link to="/">
                <Home />
              </Link>
            </IconButton>

            <IconButton color="inherit">
              <Link to="/exercises/favorited">
                <Favorite />
              </Link>
            </IconButton>
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
