import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orgApis = createApi({
  reducerPath: 'orgApis',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/org/'
  }),
  endpoints: (builder)=>({

    getOrgList: builder.query({
      query: ()=>{
        return {
          url: 'list/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`, 
          }
        }
      }
    }),

    getOrgHistory: builder.query({
      query: ()=>{
        return {
          url: 'history/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }
    }),

    getOrgSatisfied: builder.query({
      query:()=>{
        return {
          url: 'satisfied/',
          method:'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }
    }),


    getOrgSaves: builder.query({
      query:() => {
        return {
          url: 'showSave/',
          method: 'GET',
          headers: {
            'Authorization':`Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }
    }),

    orgDetailView: builder.query({
      query: (slug) =>{
        return {
          url: `detail/${slug}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      }
    }),

  })
})

export const { useGetOrgHistoryQuery, useGetOrgListQuery, useGetOrgSatisfiedQuery, useGetOrgSavesQuery, useOrgDetailViewQuery } = orgApis