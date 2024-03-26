import React, { useEffect, useState } from 'react'
import { getToken } from '../../services/LocalStorageService';
import { useGetOrgHistoryQuery } from '../../services/orgApis';
import OrgCard from '../components/org-card';


const OrgHistory = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(()=>{
    const { access_token, refresh_token } = getToken();
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
  }, []);

  const { data, isSuccess, isFetching, isError, error, refetch } = useGetOrgHistoryQuery()


  return (
    <>
      <div className="flex-col items-center size-70 org-posts">
        {isSuccess && data && (
          <>
            {data.map((post) => (
                <OrgCard key={post.id} post={post}/>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default OrgHistory
