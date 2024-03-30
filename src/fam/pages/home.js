import React, { useEffect, useState } from 'react';
import { getToken, removeToken, storeToken } from '../../services/LocalStorageService';
import { useGetFamListQuery } from '../../services/famApis';
import FamCard from '../components/fam-card';
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
