import React, { useState } from 'react';
import { useReportMutation } from '../../services/postApis';
import Popup from 'reactjs-popup';

const ReportModel = ({ slug }) => {
  const [reportMutation] = useReportMutation();

  const handleSubmitReport = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("slug", slug);
    formData.append('report', event.target.report.value);

    try {
      const response = await reportMutation(formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Popup
      trigger={<button className="button">Open Modal</button>}
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>&times;</button>
          <div className="header">Modal Title</div>
          <div className="content">
            <form onSubmit={handleSubmitReport} className=''>
              <label>
                Report this Post
                <select name="report">
                  <option value='Fake in Nature'>Fake in nature</option>
                  <option value='Inappropriate Content'>Inappropriate Content</option>
                  <option value='Spam'>Spam</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log('modal closed');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ReportModel;
