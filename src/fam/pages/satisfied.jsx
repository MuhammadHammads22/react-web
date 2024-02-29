import React from 'react';
import PostCard from '../../components/shared/postCard';
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamSatisfiedQuery } from '../../services/famApis';

const FamSatisfied = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetFamSatisfiedQuery();
  

  return (
    <div>
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

export default FamSatisfied
