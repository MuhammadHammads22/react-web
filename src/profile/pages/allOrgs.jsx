import React from 'react'
import { useAllOrgsQuery } from '../../services/profileApis';

import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';

const AllOrgs = () => {

  const { data, isSuccess, isError, error, isLoading } = useAllOrgsQuery();

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isSuccess && data && (
        <>
          <p>{data.intro}</p>
        </>
      )}
    </div>
  );
};

export default AllOrgs
