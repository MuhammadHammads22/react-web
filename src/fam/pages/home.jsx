import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import { useGetFamListQuery } from '../../services/famApis';
import PostCard from '../components/postCard';

const FAMHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetFamListQuery(access_token);

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
