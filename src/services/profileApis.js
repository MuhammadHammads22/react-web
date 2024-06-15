import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from "../storage/LocalStorageService";

export const profileApis = createApi({
  reducerPath: 'profileApis',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/profiles/',
    
  }),

  endpoints: (builder) => ({
    
    profile: builder.query({
      query: (pk) => {
        return {
          url: `detail/${pk}`, 
          method: 'GET',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`, 
          },
        }
      }
    }),

    Profiles: builder.query({
      query: ()=>{
        return {
          url: 'profiles/',
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

    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: 'update/',
          method: 'PATCH',
          body: data,
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    followOrUnfollow: builder.mutation({
      query: (pk) => {
        return {
          url: `${pk}/follow`,
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        }
      }
    }),

    report : builder.mutation({
      query: (data) => {
        return {
          url: 'report/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          },
          body: data
        }
      },
    }),

  })
});

export const { useProfileQuery, useAllOrgsQuery,useAllFollowersQuery, useAllFollowingQuery, useAllMMQuery, useNearMeQuery, useProfilesQuery, useUpdateProfileMutation, useFollowOrUnfollowMutation, useReportMutation
 } = profileApis;