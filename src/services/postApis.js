import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const postApis = createApi({
  reducerPath: 'postApis',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://127.0.0.1:8000/post/', 
  }),
  
  endpoints: (builder) => ({
    
    getPostList: builder.query({
      query: () => {
        return {
          url: 'list/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
    }),

    getPostHistory: builder.query({
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

    getPostSatisfied: builder.query({
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

    getPostSaves: builder.query({
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

    getPostDetail: builder.query({
      query: (slug) => {
        return {
          url: `detail/${slug}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
    }),


  }),
})

export const { useGetPostListQuery, useGetPostHistoryQuery, useGetPostSatisfiedQuery, useGetPostSavesQuery, useGetPostDetailQuery } = postApis

