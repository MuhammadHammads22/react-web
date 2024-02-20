import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { famApis } from '../services/famApis'
import { orgApis } from '../services/orgApis'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [famApis.reducerPath]: famApis.reducer,
    [orgApis.reducerPath]: orgApis.reducer,
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware).concat(famApis.middleware).concat(orgApis.middleware),
})

setupListeners(store.dispatch)