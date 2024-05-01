import "../assets/css/post.css"
import React, {useEffect, useState} from 'react'
import {useFilterQuery} from '../../services/postApis'
import {useLocation} from 'react-router-dom'
import PostCard from '../components/post-card';


const PostFilter = () => {
  const location = useLocation(); 
  const query = new URLSearchParams(location.search)

  const queryParams = Object.fromEntries(query.entries());
  console.log('***** Filter query params ****', queryParams);

  const queryString = new URLSearchParams(queryParams).toString(); // Serialize queryParams to a query string
  console.log('***** Query string ****', queryString); // Check the serialized query string

  const {data, isLoading, isError, isSuccess} = useFilterQuery(queryString);

  console.log('*** data', data)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred while fetching data.</p>;

  return (
    <>
      <div className="flex-col items-center size-70 fam-posts">
          {isSuccess && data && data.length > 0 && (
              <>
                {data.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
              </>
          )}
      </div>
    </>
  )
}

export default PostFilter
