import { userAuthApi } from '../services/userAuthApi';

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


export { storeToken, getToken, removeToken, getTheme, setTheme }