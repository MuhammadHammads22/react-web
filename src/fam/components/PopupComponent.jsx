import React, { useState, useRef } from 'react';

const PopupComponent = ({ title, items, onClose }) => {


  return (
    <div className="popup-container">
      <div className="popup-header">
        <h2>{title}</h2>
      </div>

      <div className="popup-body">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

  <button className="text-rose-900" onClick={onClose}>Close</button>

    </div>
  );
};

export default PopupComponent;
