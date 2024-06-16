import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useUpdateProfileMutation} from '../../services/profileApis';


const EditProfile = () => {

  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();  
  const [UpdateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      intro: data.get('intro'),
      slogan: data.get('slogan'),
      profession: data.get('profession'),
      cur_add: data.get('cur_add'),
      phone_number: data.get('phone_number'),
    };


    const res = await UpdateProfile(actualData);

    if (res.error) {
      console.log(res.error)
      setServerError(res.error);
    }
    if (res.data) {
      navigate('/');
    }
  };


  return (
    <div className='container mx-auto flex items-center justify-center mb-4 mt-20'
      style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
      <form className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 overflow-y-auto"
        onSubmit={handleSubmit} style={{maxWidth: '30rem'}}>
      <h2 className="text-xl text-gray-800 dark:text-white font-bold mb-6 text-center">Update Profile</h2>
        
        <div className="mb-4">
          <label htmlFor="intro" className="block text-gray-700 font-bold mb-2 dark:text-white">Intro</label>
          <input type="text" id="intro" name="intro" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.intro && <p className="text-red-500 text-xs mt-1">{server_error.intro[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="slogan" className="block text-gray-700 font-bold mb-2 dark:text-white">Slogan</label>
          <input type="text" id="slogan" name="slogan" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.slogan && <p className="text-red-500 text-xs mt-1">{server_error.slogan[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="profession" className="block text-gray-700 font-bold mb-2 dark:text-white">Profession</label>
          <input type="text" id="profession" name="profession" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.profession && <p className="text-red-500 text-xs mt-1">{server_error.profession[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="cur_add" className="block text-gray-700 font-bold mb-2 dark:text-white">Current Address</label>
          <input type="text" id="cur_add" name="cur_add" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.cur_add && <p className="text-red-500 text-xs mt-1">{server_error.cur_add[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-gray-700 font-bold mb-2 dark:text-white">Phone Number</label>

          <input type="text" id="phone_number" name="phone_number" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.phone_number && <p className="text-red-500 text-xs mt-1">{server_error.phone_number[0]}</p>}
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
export default EditProfile
