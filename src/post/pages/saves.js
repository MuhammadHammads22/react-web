import React from 'react'
import PostCard from '../components/post-card';
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetPostSavesQuery } from "../../services/postApis";
import "../assets/css/post.css"

const PostSaves = () => {
  const { access_token } = getToken();
  const { data, isSuccess } = useGetPostSavesQuery()

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

export default PostSaves
