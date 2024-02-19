import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/PostCard.css"
import { multiFormatDateString } from '../../lib/utils/DateConvertor'
import VideoPlayer from './VideoPlayer'

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className='flex-between '>
        <div className='flex items-center gap-3'>
          
          <VideoPlayer src={post.seeker_vid} />

          <div className="flex flex-col ">
            <p className='base-medium lg:body-bold text-light-1'>
              {post.creator}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className='subtle-semibold lg:small-regular'>
                {multiFormatDateString(post.created)}
              </p>
              -
              <p className='subtle-semibold lg:small-regular'>
                {post.modified}
              </p>
            </div>
          </div>
        </div>

        <Link to={`/update-post/${post.id}`} className='flex flex-col'>
          <img 
          src="src/assets/icons/edit.svg" 
          alt="edit"
          width={20}
          height={20} 
          />
        </Link>
      </div>

      <div className='flex flex-col'>
        <p>{post.content}</p>
      </div>

      <Link to={`/posts/${post.id}`}>
        <div className="small-medium lg:base-medium py-5">
          <ul className='flex gap-1 mt-2'>
            {post.donor.map((tag) =>(
              <li key={tag} className='text-light-3'>
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>


    </div>
  )
}

export default PostCard
