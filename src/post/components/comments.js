import React from 'react';
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import '../assets/css/comments.css';

const CommentList = ({ comment }) => {
  return (
    <div className='flex comment-object'>
      <p className='ml-4 text-gray-600'>{comment.user}</p>
      <p className='ml-4 text-gray-600'>{comment.body}</p>
      <p className='ml-4 text-gray-600'>{multiFormatDateString(comment.created)}</p>     
    </div>
  )
}

export default CommentList;