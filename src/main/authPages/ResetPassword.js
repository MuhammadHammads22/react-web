import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from "../../services/userAuthApi";

const ResetPassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [resetPassword] = useResetPasswordMutation()
  const { id, token } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }

    const res = await resetPassword({ actualData, id, token })

    if (res.error) {
      setServerMsg({})
      setServerError(res.error)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-form').reset()
      setTimeout(() => {
        navigate("/auth/login")
      }, 3000)
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full sm:w-1/2 p-4">
          <h1 className="text-center">Reset Password</h1>
          <form className="mt-4" id="password-reset-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">New Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500"
              />
              {server_error.password && <p className="text-red-500 text-xs mt-1">{server_error.password[0]}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password2">Confirm New Password</label>
              <input
                id="password2"
                name="password2"
                type="password"
                required
                className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500"
              />
              {server_error.password2 && <p className="text-red-500 text-xs mt-1">{server_error.password2[0]}</p>}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600">Save</button>
            </div>
            {server_error.non_field_errors && <div className="text-red-500 text-xs mt-2">{server_error.non_field_errors[0]}</div>}
            {server_msg.msg && <div className="text-green-500 text-xs mt-2">{server_msg.msg}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
