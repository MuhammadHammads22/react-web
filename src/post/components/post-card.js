import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/post.css";

import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { FcDonate } from "react-icons/fc";



const PostCard = ({ post }) => {
  
  console.log('post***', post.seeker_vid)
  const navigate = useNavigate(); 
  


  const handleClick = () => {
    navigate(`/post/detail/${post.slug}`);
  };


  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 mt-5 PostCard'>
      <div className='border border-gray-400 rounded-lg p-6'>

        <div className='grid gap-4'>
          <div>
            <video className='video-frame-size' controls controlsList="nodownload">
              <source src={post.seeker_vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className='flex justify-between py-4'>
          <div className='flex'>
            <Link className='icon-container' rel="stylesheet" href="">
              <BiUpvote className='text-xl'></BiUpvote>
              <p className='text-xs font-bold text-blue-500'>55</p>
            </Link>
            <Link className='icon-container' rel="stylesheet" href="">
              <BiDownvote className='text-xl'></BiDownvote>
              <p className='text-xs font-bold text-blue-500'>5</p>
            </Link>
          </div>

          <div className='flex'>
            <a className='float-right m-2 border border-gray-400 p-1'>
              <p className='text-sm rounded-full'>Donors 1</p>
            </a>

            <button className='float-right m-2 border border-gray-400 p-1'>
              <p className='text-sm rounded-full'>Reports 2</p>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PostCard;
