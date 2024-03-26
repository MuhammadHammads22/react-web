import React from 'react';
import FamCard from '../components/fam-card';
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamSatisfiedQuery } from '../../services/famApis';
import "../assets/css/fam.css"

const FamSatisfied = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetFamSatisfiedQuery();
  

  return (
    <div className='flex-col items-center size-70 fam-posts'>
      {isSuccess && data && (
        <>
          {data.map((post)=>(
            <FamCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  )
}

export default FamSatisfied
