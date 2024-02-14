import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { getToken, removeToken } from '../services/LocalStorageService';


const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/login');
  };

  return (
    <Button
      component={NavLink}
      to='/fam'
      onClick={handleLogout}
      style={({ isActive }) => ({ backgroundColor: isActive ? '#6d1b7b' : '' })}
      sx={{ color: 'white', textTransform: 'none' }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
