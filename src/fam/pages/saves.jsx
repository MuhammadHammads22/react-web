import React from 'react'
import FamCard from '../components/fam-card';
import {getToken, removeToken} from '../../services/LocalStorageService';
import { useGetFamSavesQuery } from "../../services/famApis";
import "../assets/css/fam.css"

const FamSaves = () => {
  const { access_token } = getToken();
  const { data, isSuccess } = useGetFamSavesQuery()

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

export default FamSaves
