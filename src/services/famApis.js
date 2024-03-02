import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleTokenRefresh } from './LocalStorageService';
import { useRefreshTokenMutation, userAuthApi } from './userAuthApi';
import { getToken, storeToken } from "./LocalStorageService";


// Define a service using a base URL and expected endpoints
export const famApis = createApi({
  reducerPath: 'famApis',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://127.0.0.1:8000/fam/', 
  }),
  
  endpoints: (builder) => ({
    
    getFamList: builder.query({
      query: () => {
        return {
          url: 'list/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
      
      onError: async (error) => {
        console.log("get error")
      },
    }),

    getFamHistory: builder.query({
      query: () => {
        return {
          url: 'history/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
    }),

    getFamSatisfied: builder.query({
      query: () => {
        return {
          url: 'satisfied/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }, 
    }),

    getFamSaves: builder.query({
      query: () => {
        return {
          url: 'showSave/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
    }),

  }),
})

export const { useGetFamListQuery, useGetFamHistoryQuery, useGetFamSatisfiedQuery, useGetFamSavesQuery } = famApis

