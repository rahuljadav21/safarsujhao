import React from 'react';
import { Link as RouteLink } from 'react-router-dom'
import NavLink from './NavLink';

// components from MUI
import {
  Box,
  Container,
  Button,
  Avatar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link,
} from '@mui/material';

// icons from MUI 
import {
  AccountCircleOutlined as ProfileIcon,
  SettingsOutlined as SettingIcon,
  DarkModeOutlined as DarkIcon,
  LogoutRounded as LogoutIcon,
} from '@mui/icons-material';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/' },
  { name: 'Contact', path: '/' }
];

const settings = [
  { name: 'Profile', path: '/', icon: ProfileIcon },
  { name: 'Account', path: '/', icon: SettingIcon },
  { name: 'Dark Mode', path: '/', icon: DarkIcon },
  { name: 'Logout', path: '/', icon: LogoutIcon },
];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLoggedIn = false;
  return (
    <Box sx={{ height: '60px', width: '100%', position: 'fixed', top: 0, zIndex: 1, backgroundColor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component={RouteLink}
              to="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {pages.map((page, index) => (
              <NavLink key={page.name} page={page} index={index} />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isLoggedIn ? (
            <>
              <Link component={RouteLink} to='/login'>
                <Button variant="outlined" sx={{ ml: 1.5, textTransform: 'none' }}>Login</Button>
              </Link>
              <Link component={RouteLink} to='/signup'>
                <Button variant="contained" sx={{ ml: 1.5, textTransform: 'none' }}>Signup</Button>
              </Link>
            </>
          ) : (
            <Box sx={{ flexGrow: 0, ml: 1 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu} sx={{ minWidth: '220px', py: 1 }}>
                    {<setting.icon />}<Typography textAlign="center" sx={{ ml: 1 }}>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Box>
      </Container>
    </Box >
  );
};

export default Navbar;
