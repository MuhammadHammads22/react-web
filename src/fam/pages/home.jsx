import React, { useEffect, useState } from 'react';
import { getToken, removeToken, storeToken } from '../../services/LocalStorageService';
import { useGetFamListQuery } from '../../services/famApis';
import FamCard from '../components/fam-card';
import { useRefreshTokenMutation } from '../../services/userAuthApi';
import "../assets/css/fam.css"

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
    <div className="flex-col items-center size-70 fam-posts">

          {isSuccess && data && (
            <>
              {data.map((post) => (
                  <FamCard key={post.id} post={post}/>
              ))}
            </>
          )}
      </div>
    </>
  );
};

export default FAMHome;
