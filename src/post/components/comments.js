import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import '../assets/css/comments.css';

const Comment = ({ comment, onUpvote, onDownvote, onReply }) => {
  return (
    <div className='mt-4'>
      <div className='flex justify-between'>
        <span className='text-lg font-bold'>{comment.user}</span>
        <span className='mr-30 text-gray-600'>{multiFormatDateString(comment.created)}</span>     
        {/* <span className='text-gray-600'>{comment.username}</span> */}
      </div>
      <p className='text-gray-600'>{comment.body}</p>
      <div className='flex items-center'>
        <button onClick={() => onUpvote(comment.id)} className='text-gray-600 mr-4'><AiOutlineLike /></button>
        <button onClick={() => onDownvote(comment.id)} className='text-gray-600 mr-4'><BiDislike /></button>
        <button onClick={() => onReply(comment.id)} className='text-gray-600'>Reply</button>
      </div>
    </div>
  )
}

export default Comment;
