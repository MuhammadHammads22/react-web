import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userAuthApi } from '../services/userAuthApi'
import { famApis } from '../services/famApis'
import { orgApis } from '../services/orgApis'
import { postApis } from '../services/postApis'
import { profileApis } from '../services/profileApis'

import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [famApis.reducerPath]: famApis.reducer,
    [postApis.reducerPath]: postApis.reducer,
    [orgApis.reducerPath]: orgApis.reducer,
    [profileApis.reducerPath]: profileApis.reducer,

    auth: authReducer,
    user: userReducer,
    
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(userAuthApi.middleware)
    .concat(famApis.middleware)
    .concat(postApis.middleware)
    .concat(orgApis.middleware)
    .concat(profileApis.middleware),

  })

setupListeners(store.dispatch)