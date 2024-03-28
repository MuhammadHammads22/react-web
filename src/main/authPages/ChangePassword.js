import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService';

const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();
  const { access_token } = getToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerMsg({});
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById('password-change-form').reset();
    }
  };

  // Getting User Data from Redux Store
  const myData = useSelector((state) => state.user);
  // console.log("Change Password", myData)

  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-1/2 p-4">
        <h1 className="text-center">Change Password</h1>
        <form className="mt-4" onSubmit={handleSubmit} noValidate id="password-change-form">
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500"
            />
            {server_error.password && (
              <p className="text-red-500 text-xs mt-1">{server_error.password[0]}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password2" className="block text-gray-700 font-bold mb-2">
              Confirm New Password
            </label>
            <input
              id="password2"
              name="password2"
              type="password"
              required
              className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500"
            />
            {server_error.password2 && (
              <p className="text-red-500 text-xs mt-1">{server_error.password2[0]}</p>
            )}
          </div>
          <div className="text-center">
            {isLoading ? (
              <div className="inline-block">
                {/* Replace CircularProgress with custom loading indicator */}
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
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
