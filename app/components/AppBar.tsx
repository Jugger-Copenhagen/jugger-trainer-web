import smolLogoUrl from '@/assets/smolll_logo.png';
import { auth } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import { AdminPanelSettings, ArrowDropDown, Favorite, Login, Logout } from '@mui/icons-material';
import {
  Box,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function AppBar() {
  const navigate = useNavigate();
  const { user, profile } = useUserStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  async function logout() {
    handleMenuClose();
    await auth.signOut();
    navigate('/login');
  }

  function goToAdmin() {
    handleMenuClose();
    navigate('/admin');
  }

  function goToDiagram() {
    handleMenuClose();
    navigate('/diagram');
  }

  function goToFavorites() {
    handleMenuClose();
    navigate('/exercises/favorited');
  }

  return (
    <MuiAppBar position="sticky" sx={{ width: '100vw' }}>
      <Toolbar>
        <img src={smolLogoUrl}></img>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          <Link to="/">Jugger Trainer</Link>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <List component="nav">
          {user === null ? (
            <Link to="/login">
              <Button color="secondary" variant="contained">
                Sign In <Login sx={{ ml: 0.5 }} />
              </Button>
            </Link>
          ) : (
            <>
              <Button
                sx={{ color: '#ffffff' }}
                onClick={handleMenuOpen}
                endIcon={<ArrowDropDown />}
              >
                {user.email}
              </Button>
              <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
                <MenuItem onClick={goToFavorites}>
                  <ListItemIcon>
                    <Favorite fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Favorites</ListItemText>
                </MenuItem>
                {profile?.role === 'admin' && (
                  <>
                    <MenuItem onClick={goToAdmin}>
                      <ListItemIcon>
                        <AdminPanelSettings fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Admin</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={goToDiagram}>
                      <ListItemIcon>
                        <AdminPanelSettings fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Diagram</ListItemText>
                    </MenuItem>
                  </>
                )}
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Sign Out</ListItemText>
                </MenuItem>
              </Menu>
            </>
          )}
        </List>
      </Toolbar>
    </MuiAppBar>
  );
}
