import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useUpdateUserMutation} from '../../services/userAuthApi';


const EditUser = () => {

  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();  
  const [UpdateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      full_name: data.get('fullname'),
      username: data.get('username'),
      religion: data.get('religion'),
      date_of_birth: data.get('dob'),
    };


    const res = await UpdateUser(actualData);

    if (res.error) {
      console.log(res.error)
      setServerError(res.error);
    }
    if (res.data) {
      navigate('/');
    }
  };


  return (
    <div className='container flex justify-center items-center mb-4 mt-20'>
      <form className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 overflow-y-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl text-gray-800 dark:text-white font-bold mb-6 text-center">Update User</h2>
        
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700 font-bold mb-2 dark:text-white">Full Name</label>
          <input type="text" id="fullname" name="fullname" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.full_name && <p className="text-red-500 text-xs mt-1">{server_error.full_name[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2 dark:text-white">Username</label>
          <input type="text" id="username" name="username" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.username && <p className="text-red-500 text-xs mt-1">{server_error.username[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="religion" className="block text-gray-700 font-bold mb-2 dark:text-white">Religion</label>
          <input type="text" id="religion" name="religion" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.religion && <p className="text-red-500 text-xs mt-1">{server_error.religion[0]}</p>}
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 dark:text-white">Birthday</label>
          <input type="date" id="dob" name="dob" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.date_of_birth && <p className="text-red-500 text-xs mt-1 text-black">{server_error.date_of_birth[0]}</p>}
        </div>

        <div className="text-center">
          {isLoading ? (
            <div className="inline-block loading-icon">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-stone-100" />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Update
            </button>
          )}
        </div>

        {server_error.non_field_errors && <div className="text-red-500 text-xs mt-2">{server_error.non_field_errors[0]}</div>}
      </form>
    </div>
  )
}
export default EditUser
