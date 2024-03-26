import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/org.css";


const OrgCard = ({ post }) => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(`/org/detail/${post.slug}`);
  };

  return (
  <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 ml-10 mt-5 OrgCard'>
    <div className='border border-gray-400 rounded-lg p-6'>

        <div className='grid gap-4'>
          <div className=''>
            <video className='video-frame-size' controls controlsList="nodownload">
              <source src={post.org_vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className='flex items-center mb-4'>
          <p className='text-lg font-bold'>{post.id}</p>
          <p className='text-lg font-bold'>{post.creator}</p>
          <p className='ml-4 text-gray-600'>org_name: {post.org_name}</p>
          <p className='ml-4 text-gray-600'>Need: {post.kind}</p>
          <p className='ml-4 text-gray-600'>From: {post.address}</p>
          <p className='ml-4 text-gray-600'>Satisfied: {post.satisfied} No</p>
          <p className='ml-4 text-gray-600'>verified: {post.verified}%</p>
          <p className='ml-4 text-gray-600'>Without House: {post.without_house}yes</p>
          <p className='ml-auto text-gray-600'>{multiFormatDateString(post.created)}</p>
        </div>

        <div className='mt-4'>
          <div className='flex flex-col'>
            <p className='text-gray-600'>Donors Count: {post.donor}</p>
            <p className='ml-4 text-gray-600'>Reports Count: {post.reported}</p>
            <p className='ml-4 text-gray-600'>Total upvote So Far: {post.upvote}</p>
            <p className='ml-4 text-gray-600'>Total downvote So Far: {post.downvote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgCard;
