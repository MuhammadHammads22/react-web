import { userAuthApi } from './userAuthApi';

const storeToken = (value) => {
  if (value) {
    console.log("Store Token")
    const { access, refresh } = value
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
  }
}

//localStorage.theme

const getTheme = () => {
  // default to light
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light')
  }

  let theme = localStorage.getItem('theme')
  return theme
}

const setTheme = (value) => {
  if (value) {
    localStorage.setItem('theme', value)
  }
}



const getToken = () => {
  let access_token = localStorage.getItem('access_token')
  let refresh_token = localStorage.getItem('refresh_token')
  return { access_token, refresh_token }
}

const removeToken = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}


const handleTokenRefresh = async () => {
  try {
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

export { storeToken, getToken, removeToken, handleTokenRefresh, getTheme, setTheme }