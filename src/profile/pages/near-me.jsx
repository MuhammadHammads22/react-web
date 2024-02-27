import React from 'react'
import {useNearMeQuery} from "../../services/profileApis";
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';

const NearMe = () => {
  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useNearMeQuery(username);

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


export default NearMe
