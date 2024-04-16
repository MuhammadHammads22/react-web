import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import './assets/css/search-bar.css';
import { useSearchQuery } from '../../services/postApis';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: searchData, isLoading, isError } = useSearchQuery(searchQuery);
  const navigate = useNavigate(); 


  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleSubmit = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log("enter pressed");
      handleSubmit();
    }
  };

  return (
    <div className="relative text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white dark:bg-gray-800 dark:text-white h-10 px-15 pl-2 pr-8 rounded-lg text-sm focus:outline-none search-bar"
        type="search"
        name="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="absolute right-0 top-0 mt-3 mr-2" onClick={handleSubmit}>
        <IoMdSearch />
      </button>

      {searchData && searchData.posts.length > 0 && (
        <div className="search-results">
          <ul>
            {searchData.posts.map((post) => (

              <li key={post.id}>
                {/* Display the details of each post */}
                <p>{post.description}</p>
                {/* Add more details here as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching data.</p>}
    </div>
  );
};

export default SearchBar;
