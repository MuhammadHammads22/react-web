import React, { useState } from 'react';
import { useReportMutation } from '../../services/postApis';
import Popup from 'reactjs-popup';


const ReportModel = ({ slug, count }) => {
  const [reportMutation] = useReportMutation();
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitReport = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(formData)
    formData.append("slug", slug);
    formData.append('report', selectedOption); 

    try {
      const response = await reportMutation(formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    };
  }

  return (
    <Popup
      trigger={<button className="button">Report {count} </button>}
      modal
      nested
      className="modal"
    >
      {close => (
        <div className="bg-zinc-50 dark:bg-gray-800 text-white border border-gray-700 p-8 rounded-lg">
          <button className="absolute top-0 right-0 p-2" onClick={close}>&times;</button>
          <div className="text-xl font-bold mb-4 text-slate-950 dark:text-slate-300">Report Post</div>
          <div className="content">
            <form onSubmit={handleSubmitReport} >
              <div className="mb-4 text-slate-950 dark:text-stone-200">
                Select the reason for reporting:
                
                <div className="mt-2 grid grid-cols-1 gap-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Fake in Nature"
                      checked={selectedOption === "Fake in Nature"}
                      onChange={handleOptionChange}
                      defaultChecked
                      className="form-radio text-blue-500 h-5 w-5"
                    />
                    <span className="ml-2">Fake in nature</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="He has already posted"
                      checked={selectedOption === "He has already posted"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500 h-5 w-5"
                    />
                    <span className="ml-2">FHe has already posted</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="lying"
                      checked={selectedOption === "lying"}
                      onChange={handleOptionChange}
                      className="form-radio text-blue-500 h-5 w-5"
                    />
                    <span className="ml-2">lying</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Inappropriate Content"
                      checked={selectedOption === "Inappropriate Content"}
                      onChange={handleOptionChange}
                      className="form-radio text-yellow-500 h-5 w-5"
                    />
                    <span className="ml-2">Inappropriate Content</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="Spam"
                      checked={selectedOption === "Spam"}
                      onChange={handleOptionChange}
                      className="form-radio text-green-500 h-5 w-5"
                    />
                    <span className="ml-2">Spam</span>
                  </label>

                </div>
              </div>
              
              <div className="flex justify-between">
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

                <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={close}>Close</button>
              </div>

            </form>
          </div>
          
        </div>
      )}
    </Popup>
  );
};

export default ReportModel;
