import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/post.css";
import videojs from 'video.js';

import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { FcDonate } from "react-icons/fc";
import VideoJS from './video-player.js'


const PostCard = ({ post }) => {
  
  console.log('post***', `${post.seeker_vid}`)
  const navigate = useNavigate(); 
  const playerRef = React.useRef(null);
  
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `${post.seeker_vid}`,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };



  const handleClick = () => {
    navigate(`/post/detail/${post.slug}`);
  };


  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 mt-5 PostCard'>
      <div className='border border-gray-400 rounded-lg p-6'>

        <div className='grid gap-4'>
          <div>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
