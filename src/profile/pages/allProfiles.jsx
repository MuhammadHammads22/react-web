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
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae odit fuga at et excepturi mollitia, consequatur ipsum modi, quaerat laudantium alias ab cumque necessitatibus, praesentium quo veniam porro ipsa?
      {isSuccess && data && (
        <>
        {data.map((profile)=>{
          // <ProfileCard key={profile.id} profileObject={profile} />
          {profile.user.username}
        })}
        </>
      )}
    </div>
  )
}

export default AllProfiles
