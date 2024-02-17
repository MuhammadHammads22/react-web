import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import LogoutButton from '../auth/Logout_btn';
import AccountMenu from '../auth/menu';

const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>AdaZakat</Typography>

          <Button component={NavLink} to='/fam' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>FAM</Button>

          <Button component={NavLink} to='/org' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }} >ORG</Button>

          {access_token ? 
          <AccountMenu />
          : 
          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login</Button>}

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
