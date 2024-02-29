import React, { useEffect, useState } from 'react';
import { getToken, removeToken, storeToken } from '../../services/LocalStorageService';
import { useGetFamListQuery } from '../../services/famApis';
import PostCard from '../../components/shared/postCard';
import { useRefreshTokenMutation } from '../../services/userAuthApi';

const FAMHome = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  
  useEffect(() => {
    const { access_token, refresh_token } = getToken();
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
  }, []);

  const { data, isSuccess, isFetching, isError, error, refetch } = useGetFamListQuery();


  useEffect(() => {
    if (isError && error.status === 401) {
      refreshAccessToken();
    }
  }, [isError]);

  const refreshAccessToken = async () => {
    try {
      const { data, isSuccess, isFetching, isError, error, refetch } = useRefreshTokenMutation(accessToken);
      storeToken({ access_token: data.access_token });
      setAccessToken( data.access_token );
    } catch (error) {
      // Handle refresh token failure
      console.error('Failed to refresh access token:', error);
    }
  };

  return (
    <>
      <div>
          {isSuccess && data && (
            <>
              {data.map((post) => (
                <PostCard key={post.id} post={post}/>
              ))}
            </>
          )}
      </div>
    </>
  );
};

export default FAMHome;
