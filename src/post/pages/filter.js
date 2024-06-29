import "../assets/css/post.css";
import React from 'react';
import { useFilterQuery } from '../../services/postApis';
import { useLocation } from 'react-router-dom';
import PostCard from '../components/post-card';
import PostNotFound from '../components/PostNotFound';

const PostFilter = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const queryParams = Object.fromEntries(query.entries());
  const queryString = new URLSearchParams(queryParams).toString();

  const { data, isLoading, isError, isSuccess } = useFilterQuery(queryString);

  if (isLoading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (isError) return <p className="text-center mt-10 text-red-600">Error occurred while fetching data.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        {isSuccess && data && data.length > 0 ? (
          data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <PostNotFound />
        )}
      </div>
    </div>
  );
};

export default PostFilter;
