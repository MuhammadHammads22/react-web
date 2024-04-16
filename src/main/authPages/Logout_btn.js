import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../storage/features/authSlice';
import { setUserInfo, unsetUserInfo } from '../../storage/features/userSlice';
import { getToken, removeToken } from '../../storage/LocalStorageService';


const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/auth/login');
  };

  return (
    <button
      component={NavLink}
      to='/'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
