import React from 'react'
import { useOrgDetailViewQuery } from '../../services/orgApis';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import "../assets/css/org.css";


const OrgDetailView = () => {

  const { slug } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useOrgDetailViewQuery(slug);

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    
    <div className='border border-gray-400 rounded-lg p-6 mb-6 mr-10 mt-10 ml-10'>
      <div className='flex items-center mb-4'>
        <p className='text-lg font-bold'>{data.id}</p>
        <p className='ml-4 text-gray-600'>Creator: {data.creator}</p>
        <p className='ml-4 text-gray-600'>Need: {data.kind}</p>
        <p className='ml-4 text-gray-600'>From: {data.address}</p>
        <p className='ml-4 text-gray-600'>Satisfied: {data.satisfied} No</p>
        <p className='ml-4 text-gray-600'>verified: {data.verified}%</p>
        <p className='ml-4 text-gray-600'>Without House: {data.without_house}yes</p>
        <p className='ml-auto text-gray-600'>{multiFormatDateString(data.created)}</p>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className=''>
            <video className='w-full h-auto size-100' controls>
              <source src={data.seeker_vid} type="video/mp4" />
            </video>
        </div>

        <div className=''>
          <video className='w-full h-auto size-100' controls>
            <source src={data.house_vid} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-gray-700'>{data.content}</p>
      </div>

      <div className='flex items-center mt-4'>
        <p className='bg-sky-500 text-white py-2 px-4  rounded-lg'>Phone # {data.phone_number}</p>
        <p className='bg-sky-500 text-white py-2 px-4 ml-2 rounded-lg'>Bank Account: {data.bank_details}</p>
      </div>

      <div className='mt-4 flex items-center'>
        <p className='bg-green-500 text-white py-2 px-4  rounded-lg'>Needed Amount: {data.needed_money}</p>
      </div>

      <div className='mt-4'>
        <div className='flex flex-row'>
          <p className='bg-blue-500 text-white py-2 px-4  rounded-lg'>All Donors ID: {data.donor}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>All Reported ID: {data.reported}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total Paid Amount So Far: {data.paid}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total upvote So Far: {data.upvote}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total downvote So Far: {data.downvote}</p>
        </div>
      </div>

      <div className='mt-4 flex'>
        <a href={data.doc1} className='text-blue-500 mr-2'>Document 1</a>
        <a href={data.doc2} className='text-blue-500 mr-2'>Document 2</a>
        <a href={data.doc3} className='text-blue-500 mr-2'>Document 3</a>
        <a href={data.doc4} className='text-blue-500'>Document 4</a>
      </div>

      <div className='mt-4'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg'>total Saved {data.saved}</button>
      </div>
    </div>
  );
}

export default OrgDetailView
