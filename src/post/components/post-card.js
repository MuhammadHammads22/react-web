import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/post.css";
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { BiDownvote, BiSolidDownvote } from "react-icons/bi";
import VideoJS from './video-player.js'
import {useUpvoteMutation, useDownvoteMutation} from "../../services/postApis";


const PostCard = ({ post }) => {
  
  const navigate = useNavigate(); 
  const playerRef = React.useRef(null);

  console.log('video ', post.seeker_vid)
  
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
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  
  // upvote handling! 
  const [upvote, setUpvotes] = useState(post.upvote_count)
  const [downvote, setDownvote] = useState(post.downvote_count)
  const [isUpvoted, setIsUpvoted] = useState(post.is_upvoted);
  const [isDownvoted, setIsDownvoted] = useState(post.is_downvoted);

  const [ upvoteMutation ] = useUpvoteMutation()
  const [ downvoteMutation ] = useDownvoteMutation()

  const handleUpvote = (event) => {
    event.stopPropagation();
    if (!isUpvoted) {
      setUpvotes(upvote + 1)
      setIsUpvoted(true)
      if (isDownvoted){
        setDownvote(downvote - 1)
        setIsDownvoted(false)
      };
      upvoteMutation(post.slug)
    }else {
      setUpvotes(upvote - 1)
      setIsUpvoted(false)
      upvoteMutation(post.slug)
    }
  }

  const handleDownvote = (event) => {
    event.stopPropagation();

    if (!isDownvoted) {
      setDownvote(downvote + 1)
      setIsDownvoted(true)
      if(isUpvoted){
        setUpvotes(upvote - 1)
        setIsUpvoted(false)
      };
      downvoteMutation(post.slug)
    }else{
      setDownvote(downvote - 1)
      setIsDownvoted(false)
      downvoteMutation(post.slug)
    }
  }
  
  const handleClick = () => {
    navigate(`/detail/${post.slug}`);
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
            <Link className='icon-container' rel="stylesheet" onClick={handleUpvote}>
              {isUpvoted ? <BiSolidUpvote className='text-xl text-green-500' /> : <BiUpvote className='text-xl' />}
              <p className='text-xs font-bold text-blue-500'>{upvote}</p>
            </Link>
            <Link className='icon-container' rel="stylesheet" onClick={handleDownvote}>
              {isDownvoted ? <BiSolidDownvote className='text-xl text-red-500' /> : <BiDownvote className='text-xl' />}
              <p className='text-xs font-bold text-blue-500'>{downvote}</p>
            </Link>
          </div>

          <div className='flex'>
            <a className='float-right m-2 border border-gray-400 p-1'>
              <p className='text-sm rounded-full'>Donors {post.donors_count}</p>
            </a>

            <button className='float-right m-2 border border-gray-400 p-1'>
              <p className='text-sm rounded-full'>Reports {post.report_count}</p>
            </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default PostCard;
