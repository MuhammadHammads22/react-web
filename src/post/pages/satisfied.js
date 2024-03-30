import React from 'react';
import PostCard from '../components/post-card';
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetPostSatisfiedQuery } from '../../services/postApis';
import "../assets/css/post.css"

const PostSatisfied = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetPostSatisfiedQuery();
  

  return (
    <div className='flex-col items-center size-70 fam-posts'>
      {isSuccess && data && (
        <>
          {data.map((post)=>(
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  )
}

export default PostSatisfied
