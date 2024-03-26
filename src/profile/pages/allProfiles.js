import React from 'react'
import { useProfilesQuery } from '../../services/profileApis.js'
import {  CircularProgress } from '@mui/material';
import ProfileCard from "../components/profileCard.js"


const AllProfiles = () => {
  
  const { data, isSuccess, isLoading, isError, error } = useProfilesQuery();

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
}

export default AllProfiles
