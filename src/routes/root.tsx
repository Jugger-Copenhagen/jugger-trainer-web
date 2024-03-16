import { Favorite, Home } from '@mui/icons-material';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
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
      <Box>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Jugger Trainer
            </Typography>
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
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
