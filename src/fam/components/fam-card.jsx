import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import React, { useState, useEffect } from 'react';

const FamCard = ({ post }) => {
    const [username, setUsername] = React.useState('');

    useEffect(() => {
      setUsername(post.creator?.user?.username);
    }, [post.creator]);
  
  return (
    
    <div className='border border-gray-400 rounded-lg p-6 mb-6 mr-10 mt-10 ml-10'>
      <div className='flex items-center mb-4'>
        <p className='text-lg font-bold'>{post.creator}</p>
        <p className='text-lg font-bold'>{username}</p>
        <p className='ml-4 text-gray-600'>Seeker: {post.seeker}</p>
        <p className='ml-4 text-gray-600'>Need: {post.kind}</p>
        <p className='ml-4 text-gray-600'>From: {post.address}</p>
        <p className='ml-4 text-gray-600'>Satisfied: {post.satisfied} No</p>
        <p className='ml-4 text-gray-600'>verified: {post.verified}%</p>
        <p className='ml-4 text-gray-600'>Without House: {post.without_house}yes</p>
        <p className='ml-auto text-gray-600'>{multiFormatDateString(post.created)}</p>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className=''>
          <video className='w-full h-auto' controls>
            <source src={post.seeker_vid} type="video/mp4" />
          </video>
        </div>
        <div className=''>
          <video className='w-full h-auto' controls>
            <source src={post.house_vid} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-gray-700'>{post.content}</p>
      </div>

      <div className='flex items-center mt-4'>
        <p className='bg-sky-500 text-white py-2 px-4  rounded-lg'>Phone # {post.phone_number}</p>
        <p className='bg-sky-500 text-white py-2 px-4 ml-2 rounded-lg'>Bank Account: {post.bank_details}</p>
      </div>

      <div className='mt-4 flex items-center'>
        <p className='bg-green-500 text-white py-2 px-4  rounded-lg'>Needed Amount: {post.needed_money}</p>
      </div>

      <div className='mt-4'>
        <div className='flex flex-row'>
          <p className='bg-blue-500 text-white py-2 px-4  rounded-lg'>All Donors ID: {post.donor}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>All Reported ID: {post.reported}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total Paid Amount So Far: {post.paid}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total upvote So Far: {post.upvote}</p>
          <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total downvote So Far: {post.downvote}</p>
        </div>
      </div>

      <div className='mt-4 flex'>
        <a href={post.doc1} className='text-blue-500 mr-2'>Document 1</a>
        <a href={post.doc2} className='text-blue-500 mr-2'>Document 2</a>
        <a href={post.doc3} className='text-blue-500 mr-2'>Document 3</a>
        <a href={post.doc4} className='text-blue-500'>Document 4</a>
      </div>

      <div className='mt-4'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-lg'>total Saved {post.saved}</button>
      </div>
    </div>
  );
}

export default FamCard;
