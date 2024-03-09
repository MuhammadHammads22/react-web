import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const FamCard = ({ post }) => {
  const navigate = useNavigate(); 
  const [username, setUsername] = React.useState('');

  const handleClick = () => {
    navigate(`/fam/detail/${post.id}`);
  };

  useEffect(() => {
    setUsername(post.creator?.user?.username);
  }, [post.creator]);
  
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className='border border-gray-400 rounded-lg p-6 mb-6 mr-10 mt-10 ml-10'>

        <div className='grid gap-4'>
          <div className=''>
            <video className='w-full h-auto size-100' controls controlsList="nodownload">
              <source src={post.seeker_vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className='flex items-center mb-4'>
          <p className='text-lg font-bold'>{post.id}</p>
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

        <div className='mt-4'>
          <div className='flex flex-row'>
            <p className='bg-blue-500 text-white py-2 px-4  rounded-lg'>Donors Count: {post.donor}</p>
            <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Reports Count: {post.reported}</p>
            <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total upvote So Far: {post.upvote}</p>
            <p className='bg-blue-500 text-white py-2 px-4 ml-2 rounded-lg'>Total downvote So Far: {post.downvote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamCard;
