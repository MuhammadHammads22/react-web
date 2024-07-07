import { useState } from 'react';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    };
    const res = await changeUserPassword({ actualData });
    if (res.error) {
      setServerMsg({});
      setServerError(res.error);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById('password-change-form').reset();

      setTimeout(() => {
        navigate('/auth/login');
        // localStorage.removeItem('access_token')
        // localStorage.removeItem('refresh_token')

      }, 5000);

    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center mb-4 mt-12">
    {/* // content-wrapper flex items-center justify-center h-screen bg-white-100" */}
      <div className='max-w-md bg-white p-10 m-10 rounded-lg shadow-md '>
        <form className="mt-4" onSubmit={handleSubmit} noValidate id="password-change-form">
          <p className="text-2xl font-bold mb-4 text-gray-800 dark:text-stone-50">Change Password </p>
          <div className="mb-4 mt-4">
            <label htmlFor="current-password" className=" text-gray-700 font-bold mb-2  dark:text-stone-50">
              Current Password
            </label>
            <input
              id="current-password"
              name="current-password"
              type="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {server_error.current_password && (
              <p className="text-red-500 text-xs mt-1">{server_error.current_password[0]}</p>

            )}
          </div>
          <div className='mb-4 mt-4'>
            <label htmlFor="password" className=" text-gray-700 font-bold mb-2  dark:text-stone-50">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {server_error.password && (
              <p className="text-red-500 text-xs mt-1">{server_error.password[0]}</p>
            )}
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="password2" className="block text-gray-700 font-bold mb-2  dark:text-stone-50">
              Confirm New Password
            </label>
            <input
              id="password2"
              name="password2"
              type="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {server_error.password2 && (
              <p className="text-red-500 text-xs mt-1">{server_error.password2[0]}</p>
            )}
          </div>

          <div className="text-center">
            {isLoading ? (
              <div className="inline-block">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-stone-100" />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-red-1000 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            )}
          </div>

          {server_error.non_field_errors && (
            <div className="text-red-500 text-xs mt-2">{server_error.non_field_errors[0]}</div>
          )}

          {server_msg.msg && (
            <div className="text-green-500 text-xs mt-2">{server_msg.msg}</div>
          )}

        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
