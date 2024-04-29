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

    getPostDocFiles: builder.query({
      query: (slug) => {
        return {
          url: `get-post-doc-files/${slug}`,
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

    createPost: builder.mutation({
      query: (data) => {
        return {
          url: 'create/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
            'Content-Type': 'multipart/form-data',
          },
          body: data
        }
      },

    }),

    uploadFile : builder.mutation({
      query: (formData) => {
        console.log('***** formData', formData)
        return {
          url: 'upload-file/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }
      },
    }),

    upvote : builder.mutation({
      query: (slug) => {
        return {
          url: `upvote/${slug}/`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
            'Content-Type': 'multipart/form-data',
          },
        }
      },
    }),

    downvote : builder.mutation({
      query: (slug) => {
        return {
          url: `downvote/${slug}/`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
            'Content-Type': 'multipart/form-data',
          },
        }
      },
    }),

    save : builder.mutation({
      query: (slug) => {
        return {
          url: `save/${slug}/`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
            'Content-Type': 'multipart/form-data',
          },
        }
      },
    }),

    comment : builder.mutation({
      query: (formData) => {
        return {
          url: 'PostCommenta/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          },
          body: formData
        }
      },
    }),

    getComments: builder.query({
      query: (slug) => {
        return {
          url: `GetComments/${slug}`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
    }),

    search: builder.query({
      query: (query) => {
        return {
          url: 'search/',
          method: 'GET',
          params: {query},
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          }
        }
      },
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

    donate : builder.mutation({
      query: (data) => {
        return {
          url: 'donate/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          },
          body: data
        }
      },
    }),

    filter : builder.mutation({
      query: (data) => {
        return {
          url: 'filter/',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token') }`,
          },
          body: data
        }
      },
    }),

  }),
})

export const { 
    useGetPostListQuery, useGetPostHistoryQuery, useGetPostSatisfiedQuery, useGetPostSavesQuery, useGetPostDetailQuery, useGetPostDocFilesQuery, useCreatePostMutation, useUploadFileMutation,
    useUpvoteMutation, useDownvoteMutation, useSaveMutation, useCommentMutation, useGetCommentsQuery, useSearchQuery, useReportMutation, useDonateMutation, useFilterMutation

} = postApis

