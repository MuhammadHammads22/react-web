import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';
import "./assets/css/auth_card.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const UserLogin = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    
    const res = await loginUser(actualData);
    
    if (res.error) {
      setServerError(res.error.status);
    }
    
    if (res.data) {
      storeToken(res.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate('/post');
    }

  };

  let { access_token } = getToken();
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  return (
    <div className="max-w-md mx-auto AuthCard">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            placeholder="Email Address"
          />
          {server_error.email && (
            <p className="text-red-500 text-xs italic">{server_error.email[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            placeholder="Password"
          />
          {server_error.password && (
            <p className="text-red-500 text-xs italic">{server_error.password[0]}</p>
          )}
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
              Login
            </button>
          )}
        </div>

        <div className="text-center">
          <NavLink to="/sendpasswordresetemail" className="text-blue-500 hover:underline">
            Forgot Password?
          </NavLink>
          <br />
          <NavLink to="/policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </NavLink>
          <span className="mx-1"> & </span>
          <NavLink to="/terms" className="text-blue-500 hover:underline">
            Terms and Conditions
          </NavLink>
        </div>

        {server_error.non_field_errors && (
          <div className="text-red-500 text-xs italic">{server_error.non_field_errors[0]}</div>
        )}
      </form>
    </div>
  );
};

export default UserLogin;
