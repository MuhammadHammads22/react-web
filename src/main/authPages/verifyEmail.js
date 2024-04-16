import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  console.log("I am from VerifyEmail")
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth/login');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 mt-5'>
      Log In
    </div>
  )
};

export default VerifyEmail;
