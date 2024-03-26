import React from 'react'
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamHistoryQuery } from '../../services/famApis';
import "../assets/css/fam.css"
import FamCard from '../components/fam-card';

const FamHistory = () => {
  const {access_token} = getToken();
  const {data, isSuccess} = useGetFamHistoryQuery();

  return (
    <div className='flex-col items-center size-70 fam-posts'>
      {isSuccess && data && (
        <>
          {data.map((post)=>(
            <FamCard key={post.id} post={post}/>
          ))}
        </>
      )}
    </div>
  )
}

export default FamHistory
