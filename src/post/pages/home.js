import React, { useEffect, useState } from 'react';
import { getToken, removeToken, storeToken } from '../../storage/LocalStorageService';
import { useGetPostListQuery } from '../../services/postApis';
import PostCard from '../components/post-card';
import "../assets/css/post.css"

const PostHome = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  
  useEffect(() => {
    const { access_token, refresh_token } = getToken();
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
  }, []);

  const { data, isSuccess } = useGetPostListQuery();

  return (
    <>
    <div className="flex-col items-center size-70 fam-posts">
          {isSuccess && data && data.length > 0 && (
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

export default PostHome;
