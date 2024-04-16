import React from 'react';
import PostCard from '../components/post-card';
import { useLocation } from 'react-router-dom';
import { useSearchQuery } from '../../services/postApis';

const SearchResults = () => {
  const location = useLocation(); 
  const query = new URLSearchParams(location.search).get('query'); 
  const { data: searchData, isLoading, isError } = useSearchQuery(query);

  if (isLoading) return <p>Loading...</p>; 
  if (isError) return <p>Error occurred while fetching data.</p>; 

  return (
    <div className="flex-col items-center size-70 fam-posts">
      {searchData && searchData.posts && searchData.posts.length > 0 ? (
        <div>
          {searchData.posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
