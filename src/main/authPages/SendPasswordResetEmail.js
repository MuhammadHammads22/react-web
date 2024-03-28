import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";

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
    <div className="flex justify-center">
      <div className="w-full sm:w-1/2 p-4">
        <h1 className="text-center">Reset Password</h1>
        <form className="mt-4" id="password-reset-email-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="px-3 py-2 w-full rounded border focus:outline-none focus:border-blue-500 text-black"
            />
            {server_error.email && <p className="text-red-500 text-xs mt-1">{server_error.email[0]}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600">Send</button>
          </div>
          {server_error.non_field_errors && <div className="text-red-500 text-xs mt-2">{server_error.non_field_errors[0]}</div>}
          {server_msg.msg && <div className="text-green-500 text-xs mt-2">{server_msg.msg}</div>}
        </form>
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
