import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/LocalStorageService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/css/auth_card.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Registration = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();  
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      full_name: data.get('fullname'),
      username: data.get('username'),
      religion: data.get('religion'),
      gender: gender,
      date_of_birth: data.get('dob'),
      password: data.get('password'),
      password2: data.get('password2'),
    };


    const res = await registerUser(actualData);

    if (res.error) {
      console.log(res.error)
      setServerError(res.error);
    }
    if (res.data) {
      console.log(res.data)
      storeToken(res.data.token);
      navigate('/fam');
    }
  };

  return (
    <>
      <form className="bg-white RegisterCard" id="registration-form" onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input type="text" id="fullname" name="fullname" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.full_name && <p className="text-red-500 text-xs mt-1">{server_error.full_name[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input type="text" id="username" name="username" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.username && <p className="text-red-500 text-xs mt-1">{server_error.username[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="religion" className="block text-gray-700 font-bold mb-2">Religion</label>
          <input type="text" id="religion" name="religion" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.religion && <p className="text-red-500 text-xs mt-1">{server_error.religion[0]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Gender</label>
          <div className="flex">
            <button
              onClick={() => setGender('female')}
              className={`mr-2 px-4 py-2 rounded ${gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Female
            </button>
            <button
              onClick={() => setGender('male')}
              className={`px-5 py-2 rounded ${gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Male
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Birthday</label>
          <input type="text" id="dob" name="dob" required className="px-5 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.date_of_birth && <p className="text-red-500 text-xs mt-1 text-black">{server_error.date_of_birth[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input type="email" id="email" name="email" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.email && <p className="text-red-500 text-xs mt-1">{server_error.email[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.password && <p className="text-red-500 text-xs mt-1">{server_error.password[0]}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password2" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
          <input type="password" id="password2" name="password2" required className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black" />
          {server_error.password2 && <p className="text-red-500 text-xs mt-1">{server_error.password2[0]}</p>}
        </div>

        <div className="text-center">
          {isLoading ? (
            <div className="inline-block loading-icon">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Register
            </button>
          )}
        </div>

        {server_error.non_field_errors && <div className="text-red-500 text-xs mt-2">{server_error.non_field_errors[0]}</div>}
      </form>
    </>
  );
};

export default Registration;
