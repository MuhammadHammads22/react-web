import React from 'react'
import {getToken, removeToken} from '../../storage/LocalStorageService';
import { useGetPostHistoryQuery } from '../../services/postApis';
import "../assets/css/post.css"
import PostCard from '../components/post-card';

const PostHistory = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetPostHistoryQuery();

  return (
    <div className='flex-col items-center size-70 fam-posts'>
      {isSuccess && data && (
        <>
          {data.map((post)=>(
            <PostCard key={post.id} post={post}/>
          ))}
        </>
      )}
    </div>
  )
}

export default PostHistory
