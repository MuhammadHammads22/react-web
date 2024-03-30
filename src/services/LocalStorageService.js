import { userAuthApi } from './userAuthApi';
import CryptoJS from 'crypto-js';

const storeToken = (value) => {
  if (value) {
    const { access, refresh } = value;
    const encryptedAccess = CryptoJS.AES.encrypt(access, 'secretKey').toString();
    const encryptedRefresh = CryptoJS.AES.encrypt(refresh, 'secretKey').toString();
    localStorage.setItem('access_token', encryptedAccess);
    localStorage.setItem('refresh_token', encryptedRefresh);
  }
};

const getToken = () => {
  let encryptedAccess = localStorage.getItem('access_token');
  let encryptedRefresh = localStorage.getItem('refresh_token');

  if (encryptedAccess && encryptedRefresh) {
    const access_token = CryptoJS.AES.decrypt(encryptedAccess, 'secretKey').toString(CryptoJS.enc.Utf8);
    const refresh_token = CryptoJS.AES.decrypt(encryptedRefresh, 'secretKey').toString(CryptoJS.enc.Utf8);
    return { access_token, refresh_token };
  } else {
    return { access_token: null, refresh_token: null };
  }
};


const removeToken = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}


const handleTokenRefresh = async () => {
  try {
    console.log("I am called handleTokenRefresh")
    const { data } = await userAuthApi.endpoints.refreshToken.fetch(localStorage.getItem('refresh_token'));
    storeToken(data); // Assuming you have storeToken function defined
    return data.access;
  } catch (error) {
    // Handle refresh token failure here (e.g., logout user)
    console.error('Failed to refresh token:', error);
    // Throw error for UI to handle if needed
    throw error;
  }
};

export { storeToken, getToken, removeToken, handleTokenRefresh }