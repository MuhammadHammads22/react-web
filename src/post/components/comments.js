import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import '../assets/css/comments.css';

const Comment = ({ comment, onUpvote, onDownvote, onReply }) => {
  return (
    <div className='mt-4 ml-2'>
      <div className='flex justify-between'>
        <span className='text-lg font-bold text-dark-1 dark:text-white'>{comment.user}</span>
        <span className='mr-30 text-dark-1 dark:text-gray-100'>{multiFormatDateString(comment.created)}</span>     
      </div>
      <p className='text-dark-1 dark:text-gray-100'>{comment.body}</p>
      {/* <div className='flex items-center'>
        <button onClick={() => onUpvote(comment.id)} className='text-gray-600 mr-4'><AiOutlineLike /></button>
        <button onClick={() => onDownvote(comment.id)} className='text-gray-600 mr-4'><BiDislike /></button>
        <button onClick={() => onReply(comment.id)} className='text-gray-600'>Reply</button>
      </div> */}
    </div>
  )
}

export default Comment;
