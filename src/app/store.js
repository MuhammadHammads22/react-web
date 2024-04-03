import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userAuthApi } from '../services/userAuthApi'
import { postApis } from '../services/postApis'
import { profileApis } from '../services/profileApis'

import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [postApis.reducerPath]: postApis.reducer,
    [profileApis.reducerPath]: profileApis.reducer,

    auth: authReducer,
    user: userReducer,
    
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(userAuthApi.middleware)
    .concat(postApis.middleware)
    .concat(profileApis.middleware),

  })

setupListeners(store.dispatch)