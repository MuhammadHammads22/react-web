import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import AccountMenu from './menu';
import { GrAdd } from "react-icons/gr";

const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" color="info" style={{ backgroundColor: '#2d3740'}}>
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>AdaZakat</Typography>

          <Button component={NavLink} to='/post' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Post</Button>

          <Button component={NavLink} to="/createpost" sx={{color: 'white', textTransform: 'none', '&:hover': { backgroundColor: '#5c1566',},}}>
            <GrAdd /> Create Post
          </Button>


          <Button component={NavLink} to='/profiles' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }} >Profiles</Button>

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
