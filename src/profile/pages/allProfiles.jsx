import React from 'react'
import { useAllProfilesQuery } from '../../services/profileApis'
import {  CircularProgress } from '@mui/material';
import ProfileCard from "../components/profileCard.jsx"


const AllProfiles = () => {
  const { data, isSuccess, isLoading, isError, error } = useAllProfilesQuery();

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isSuccess && data && (
        <>
        {data.map((profile)=>{
          <ProfileCard key={profile.id} profileObject={profile} />
        })}
        </>
      )}
    </div>
  )
}

export default AllProfiles
