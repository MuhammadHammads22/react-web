import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from "./LocalStorageService";

export const profileApis = createApi({
  reducerPath: 'profileApis',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/profiles/',
    
  }),

  endpoints: (builder) => ({
    
    profile: builder.query({
      query: (pk) => {
        return {
          url: `detail/${pk}/`, 
          method: 'GET',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`, 
          },
        }
      }
    }),

    allProfiles: builder.query({
      query: ()=>{
        return {
          url: 'allp/',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`, 
          },
        }
      }
    }),

    allOrgs: builder.query({
      query: ()=>{
        return {
          url: "Organizations",
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    allMM: builder.query({
      query: ()=>{
        return {
          url: "M&M",
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    NearMe: builder.query({
      query: (pk)=>{
        return {
          url: `${pk}/nearme`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    allFollowers: builder.query({
      query: (pk)=>{
        return {
          url: `${pk}/followers`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    allFollowing: builder.query({
      query: (pk)=>{
        return {
          url: `${pk}/following`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),






  })

});

export const { useProfileQuery, useAllOrgsQuery, useAllProfilesQuery, useAllFollowersQuery, useAllFollowingQuery, useAllMMQuery, useNearMeQuery } = profileApis;