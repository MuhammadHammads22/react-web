import React, { useState } from 'react';
import { useDonateMutation } from '../../services/postApis';
import Popup from 'reactjs-popup';


const DonateModel = ({ slug, count }) => {
  const [donateMutation] = useDonateMutation();
  const [selectedOption, setSelectedOption] = useState(0); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitDonation = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append('amount', selectedOption); 

    try {
      const response = await donateMutation(formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Popup
      trigger={<button className="button">Donate {count} </button>}
      modal
      nested
      className="modal"
    >
      {close => (
        <div className="bg-zinc-50 dark:bg-gray-800 text-white border border-gray-700 p-8 rounded-lg relative w-96 h-96 overflow-y-auto">
        <button className="absolute top-2 right-2 p-2 text-white" onClick={close}>&times;</button>
        <div className="text-xl font-bold mb-4 text-slate-950 dark:text-slate-300">Donate Post</div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-4">
          <div className="text-slate-950 dark:text-stone-200">
            <p className="text-md mt-5 font-bold">First Step</p>
            <p className=''>
              Verify the seeker's address and bank details by calling them, and confirm their identity and eligibility to receive Zakat. If the seeker lives near you, then do visit.
            </p>
          </div>
          <div className="text-slate-950 dark:text-stone-200">
            <p className="text-md mt-5 font-bold">Second Step</p>
            <p className=''>
              Make payments directly to the seeker through safe and secure methods such as internet banking or delivery services. Ensure that the payment reaches them without any delay or inconvenience.
            </p>
          </div>
          <div className="text-slate-950 dark:text-stone-200">
            <p className="text-md mt-5 font-bold">Third Step</p>
            <p className=''>
              After making the payment, please inform us of the amount you paid so that we can keep a record and track the payment. This will help us ensure that Zakat reaches those in need in a timely and efficient manner.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmitDonation} className="space-y-4">
          <div className="text-slate-950 dark:text-stone-200">
            Kindly Enter the amount in PKR:
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="number"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  className="text-dark-1 dark:text-white dark:bg-black border border-gray-300 rounded px-2 py-1"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            <button type="button" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={close}>Close</button>
          </div>
        </form>
      </div>
      )}
    </Popup>
  );
};

export default DonateModel;
