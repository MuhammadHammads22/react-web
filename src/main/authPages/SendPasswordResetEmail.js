import { useState } from 'react';
import './assets/css/sendPasswordResetEmail.css'
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
import { Send } from '@mui/icons-material';

const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
  }


  return (
    <div className="content-wrapper flex items-center justify-center h-screen bg-white-100">
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Forgot Password?</h1>
        <form id="password-reset-email-form" onSubmit={handleSubmit}>
          <div className="mt-4">Kindly Enter the Email Address tied to your account, we would help you reset your password
          <div className="mb-4 mt-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" name="email" id="email" placeholder="mail@yourmail.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          </div>
          {server_error.email && <p className="text-grey-500 text-xs italic">{server_error.email}</p>}
          <button type="submit" className="w-full bg-blue-500 hover:bg-red-1000 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isLoading} >
            Recover Password
          </button>
          {server_msg.message && <p className="mt-2 text-green-500 text-xs italic">{server_msg.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
