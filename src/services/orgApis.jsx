import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orgApis = createApi({
  reducerPath: 'orgApis',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/org/'
  }),
  endpoints: (builder)=>({

    getOrgList: builder.query({
      query: (access_token)=>{
        return {
          url: 'list/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${access_token}`, 
          }
        }
      }
    }),

    getOrgHistory: builder.query({
      query: (access_token)=>{
        return {
          url: 'history/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    getOrgSatisfied: builder.query({
      query:(access_token)=>{
        return {
          url: 'satisfied/',
          method:'GET',
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),


    getOrgSaves: builder.query({
      query:(access_token) => {
        return {
          url: 'showSave/',
          method: 'GET',
          headers: {
            'Authorization':`Bearer ${access_token}`,
          }
        }
      }
    })

  })
})

export const { useGetOrgHistoryQuery, useGetOrgListQuery, useGetOrgSatisfiedQuery, useGetOrgSavesQuery } = orgApis