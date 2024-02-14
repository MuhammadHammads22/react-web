import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const famApis = createApi({
  reducerPath: 'famApis',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/fam/' }),
  endpoints: (builder) => ({
    getFamList: builder.query({
      query: (access_token) => {
        return {
          url: 'list/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    getFamHistory: builder.query({
      query: (access_token) => {
        return {
          url: 'history/',
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  }),
})

export const { useGetFamListQuery, useGetFamHistoryQuery } = famApis