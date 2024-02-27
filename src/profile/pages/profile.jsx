import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';

import { useProfileQuery } from '../../services/profileApis';


const ProfileDetail = () => {
  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useProfileQuery(username);

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {username}

      {isSuccess && data && (
        <>
          <p>{data.intro}</p>
        </>
      )}
    </div>
  );
};

export default ProfileDetail;
