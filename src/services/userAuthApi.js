import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/user/' }),
  
  endpoints: (builder) => ({
  
    registerUser: builder.mutation({
      query: (user) => {
        console.log('user', user)
        return {
          url: 'register/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    loginUser: builder.mutation({
      query: (user) => {
        console.log(user)

        return {
          url: 'login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    refreshToken: builder.mutation({
      query:(refresh_token)=>{
        return{
          url: "refresh/",
          method: "POST",
          body: refresh_token,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
    }),
    
    getLoggedUser: builder.query({
      query: (username) => {
        return {
          url: `get-user-detial/${username}`,
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }
    }),

    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'changepassword/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'reswordEmail/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset/${id}/${token}/`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

  }),
})

export const { useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation, useRefreshTokenMutation } = userAuthApi
