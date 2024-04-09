import React from 'react'
import { useProfileQuery } from '../../services/profileApis';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import '../assets/css/profile-card.css'

const ProfileDetail = () => {

  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useProfileQuery(username);
  const { data: userdeatil } = useGetLoggedUserQuery(username)

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="profile-card items-center justify-center">
    <div className="p-8 bg-white shadow mt-24  ml-20 items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          <div>
            <p className="font-bold text-gray-700 text-xl">{data.following}</p>
            <p className="text-gray-400">Friends</p>
          </div>
          <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
            <p className="text-gray-400">Photos</p>
          </div>
              <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
            <p className="text-gray-400">Comments</p>
          </div>
        </div>
        <div className="relative">
          <div className="w-40 h-40 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-gray-500">
            <img src='{data.picture}'></img>
          </div>
        </div>

        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <button
            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Follow
          </button>
              <button
            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Report
          </button>
        </div>
        </div>

      <div className="mt-20 text-center border-b pb-12">
        <h1 className="text-4xl font-medium text-gray-700">{userdeatil.full_name} <p className="font-light text-gray-500 text-sm">{userdeatil.username}</p></h1>
        <p className="font-light text-gray-600 mt-3">{data.slogan}</p>

        <p className="mt-8 text-gray-500">{data.intro}</p>
      </div>

      </div>
    </div>
  );
}

export default ProfileDetail
