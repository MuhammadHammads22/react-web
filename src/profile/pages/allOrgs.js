import React from 'react'
import { useAllOrgsQuery } from '../../services/profileApis.js';
import ProfileCard from "../components/profileCard.js"

import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';

const AllOrgs = () => {

  const { data, isSuccess, isError, error, isLoading } = useAllOrgsQuery();

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
      <div className='grid grid-cols-4 gap-4'>
        {isSuccess && data && (
          <>
            {data.map((profileObject) => (
              <ProfileCard key={profileObject.id} profileObject={profileObject}/>
            ))}
          </>
        )}
      </div>
    )
};

export default AllOrgs
