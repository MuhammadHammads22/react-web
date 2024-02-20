import React from 'react'
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamHistoryQuery } from '../../services/famApis';
import PostCard from '../../components/shared/postCard';


const FamHistory = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetFamHistoryQuery(access_token);

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

export default FamHistory
