import React, { useEffect, useState } from 'react'
import { getToken } from '../../services/LocalStorageService';
import { useGetOrgSavesQuery } from '../../services/orgApis';
import OrgCard from '../components/org-card';


const OrgSaves = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(()=>{
    const { access_token, refresh_token } = getToken();
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
  }, []);

  const { data, isSuccess, isFetching, isError, error, refetch } = useGetOrgSavesQuery()

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

export default OrgSaves
