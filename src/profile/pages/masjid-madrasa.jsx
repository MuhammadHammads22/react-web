import React from 'react'
import { useAllMMQuery } from "../../services/profileApis.jsx";
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';


const MasjidMadrasa = () => {
  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useAllMMQuery();

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


export default MasjidMadrasa
