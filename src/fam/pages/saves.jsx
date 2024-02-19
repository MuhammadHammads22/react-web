import React from 'react'
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamSavesQuery } from "../../services/famApis";
import PostCard from '../components/postCard';

const FamSaves = () => {
  const { access_token } = getToken();
  const { data, isSuccess } = useGetFamSavesQuery(access_token)

  return (
    <div>
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

export default FamSaves
