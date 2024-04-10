import React from 'react'
import { useGetPostDetailQuery, useGetPostDocFilesQuery } from '../../services/postApis';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import "../assets/css/post.css";
import { Link } from 'react-router-dom';

import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";


const PostDetailView = () => {

  const { slug } = useParams(); // Extract username from URL parameters

  const { data, isError, error, isLoading } = useGetPostDetailQuery(slug);
  const { docfiles, docfileIsLoading} = useGetPostDocFilesQuery(slug);
  
  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='PostDetailView'>
      <div className='flex items-center mb-4'>
        <p className='text-lg font-bold'>{data.creator}</p>
        <p className='ml-4 text-gray-600'>Seeker: {data.seeker}</p>
        <p className='ml-4 text-gray-600'>Need: {data.kind}</p>
        <p className='ml-4 text-gray-600'>From: {data.address}</p>
        <p className='ml-4 text-gray-600'>Satisfied: {data.satisfied} No</p>
        <p className='ml-4 text-gray-600'>verified: {data.verified}%</p>
        <p className='ml-4 text-gray-600'>Without House: {data.without_house}yes</p>
        <p className='ml-auto text-gray-600'>{multiFormatDateString(data.created)}</p>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='detail-video-size'>
            <video className='detail-video-size' controls controlsList="nodownload">
              <source src={data.seeker_vid} type="video/mp4" />
            </video>
        </div>

        <div className=''>
            <video className='detail-video-size' controls controlsList="nodownload">
              <source src={data.place_vid} type="video/mp4" />
            </video>
        </div>
      </div>

      <div className='flex justify-between py-4'>
        
        <div className='flex'>
          <Link className='icon-container' rel="stylesheet" href="">
            <BiUpvote className='text-xl'></BiUpvote>
            <p className='text-xs font-bold text-blue-500'>1</p>
          </Link>
          <Link className='icon-container' rel="stylesheet" href="">
            <BiDownvote className='text-xl'></BiDownvote>
            <p className='text-xs font-bold text-blue-500'>2</p>
          </Link>
        </div>

        <div className='flex'>
          <p className='text-sm rounded-full'>Donors 3</p>
          <p className='text-sm rounded-full'>Reports 55</p>
        </div>

      </div>

      <div className='mt-4'>
        <p className='text-gray-700'>{data.description}</p>
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
          <p className='bg-blue-500 text-white py-2 px-4  rounded-lg'>All Donors ID: 55</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>All Reported ID: 5</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total Paid Amount So Far: {data.paid}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total upvote So Far: 6</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total downvote So Far: 75</p>
        </div>
      </div>


      <div className='mt-4'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg'>total Saved {data.saved}</button>
      </div>

      <div className='mt-4'>
        {docfileIsLoading && docfiles && (
              <>
                {docfiles.map((post) => (
                  <p>{post}</p>
                ))}
              </>
            )}
      </div>
    </div>
  );
}

export default PostDetailView
