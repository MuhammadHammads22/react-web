import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/post.css";
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { BiDownvote, BiSolidDownvote } from "react-icons/bi";
import VideoJS from './video-player.js'
import {useUpvoteMutation, useDownvoteMutation} from "../../services/postApis";


const PostCard = ({ post }) => {
  
  const navigate = useNavigate(); 
  
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
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 mt-5 PostCard bg-white dark:bg-gray-800 rounded shadow-md'>
      <div className='border border-gray-400 rounded-lg p-6'>

        <div className='grid gap-4 text-dark font-bold dark:text-white justify-start'>
          <p>{post.description}</p>
        </div>

        <hr className='mt-3 p-2 border-t-2 border-slate-500'/>
        
        <div className='flex justify-between'>
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
            <a className='float-right m-2  p-1'>
              <p className='text-sm rounded-full text-dark font-bold dark:text-white'>Donors {post.donors_count}</p>
            </a>

            <button className='float-right m-2  p-1'>
              <p className='text-sm rounded-full text-dark font-bold dark:text-white'>Reports {post.report_count}</p>
            </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default PostCard;
