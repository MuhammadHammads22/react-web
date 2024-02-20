import React, { useEffect, useState } from 'react'
import { getToken } from '../../services/LocalStorageService';
import { useGetOrgListQuery } from '../../services/orgApis';
import { useRefreshTokenMutation } from '../../services/userAuthApi';
import PostCard from '../../components/shared/postCard';


const OrgHome = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(()=>{
    const { access_token, refresh_token } = getToken();
    setAccessToken(access_token);
  }, []);

  const { data, isSuccess, isFetching, isError, error, refetch } = useGetOrgListQuery()

  useEffect(()=>{
    if(isError && error.status===401){
      refreshAccessToken();
    }
  }, [isError]);

  const refreshAccessToken = async()=>{
    try{
      const {data, isSuccess, isFetching, isError, error, refetch } = useRefreshTokenMutation(access_token);
      storeToken({ access_token: data.access_token });
      setAccessToken( data.access_token );
    } catch (error){
      console.error("Failed to refresh access token:", error);
    }
  }

  return (
    <div>
      {isSuccess && data &&(
        <>
          {data.map((post)=>(
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  )
}

export default OrgHome
