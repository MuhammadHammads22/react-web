import React from 'react'
import {useNearMeQuery} from "../../services/profileApis.js";
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import ProfileCard from "../components/profileCard.js"

const NearMe = () => {
  const { username } = useParams(); // Extract username from URL parameters

  const { data, isSuccess, isError, error, isLoading } = useNearMeQuery(username);

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
  );
};


export default NearMe
