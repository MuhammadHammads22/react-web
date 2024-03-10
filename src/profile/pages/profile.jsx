import React from 'react'
import { useProfileQuery } from '../../services/profileApis';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import { multiFormatDateString } from '../../lib/utils/DateConvertor';


const ProfileDetail = () => {

  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useProfileQuery(username);

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    
    <div className='border border-gray-400 rounded-lg p-6 mb-6 mr-10 mt-10 ml-10'>
      <div className='flex items-center mb-4'>
        <p className='text-lg font-bold'>ID: {data.id}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>Seeker: {data.seeker}</p>
        <p className='ml-4 text-gray-600  bg-sky-500 text-white py-2 px-4  rounded-lg'>intro: {data.intro}</p>
        
      </div>

      <div className='flex items-center mb-4'>
       
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>profession: {data.profession}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>cur_add: {data.cur_add}%</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>fam_post_no: {data.fam_post_no}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>org_post_no: {data.org_post_no}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>kind: {data.kind}</p>

      </div>



      <div className='flex items-center mb-4'>
      <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>reported: {data.reported}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>Joined: {data.created}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>cat: {data.cat}</p>
        <p className='ml-4 text-gray-600 bg-sky-500 text-white py-2 px-4  rounded-lg'>promote: {data.promote}</p>
        <p className='ml-auto text-gray-600  bg-sky-500 text-white py-2 px-4  rounded-lg'>{multiFormatDateString(data.created)}</p>
      </div>


      <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <img src={data.picture} />
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-gray-700'>{data.following}</p>
      </div>

      <div className='flex items-center mt-4'>
        <p className='bg-sky-500 text-white py-2 px-4  rounded-lg'>Phone # {data.phone_number}</p>
        <p className='bg-sky-500 text-white py-2 px-4 ml-2 rounded-lg'>Bank Account: {data.bank_details}</p>
      </div>

      <div className='mt-4 flex items-center'>
        <p className='bg-green-500 text-white py-2 px-4  rounded-lg'>user: {data.user}</p>
      </div>

      
    </div>
  );
}

export default ProfileDetail
