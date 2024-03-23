import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../assets/css/fam.css";

import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { FcDonate } from "react-icons/fc";

import PopupComponent from './PopupComponent';


const FamCard = ({ post }) => {
  
  const navigate = useNavigate(); 
  
  const [showDonorPopup, setShowDonorPopup] = useState(false);
  const [showReportPopup, setShowReportPopup] = useState(false);


  const handleClick = () => {
    navigate(`/fam/detail/${post.slug}`);
  };

  const toggleDonorsPopup = (e) => {
    e.stopPropagation(); 
    setShowDonorPopup(!showDonorPopup);
  };

  const toggleReportPopup = (e) => {
    e.stopPropagation(); 
    setShowReportPopup(!showReportPopup);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-5 mt-5 FamCard'>
      <div className='border border-gray-400 rounded-lg p-6'>

        <div className='grid gap-4'>
          <div>
            <video className='video-frame-size' controls controlsList="nodownload">
              <source src={post.seeker_vid} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className='flex justify-between py-4'>
          <div className='flex'>
            <Link className='icon-container' rel="stylesheet" href="">
              <BiUpvote className='text-xl'></BiUpvote>
              <p className='text-xs font-bold text-blue-500'>{post.upvote}</p>
            </Link>
            <Link className='icon-container' rel="stylesheet" href="">
              <BiDownvote className='text-xl'></BiDownvote>
              <p className='text-xs font-bold text-blue-500'>{post.downvote}</p>
            </Link>
          </div>

          <div className='flex'>
            <a className='float-right m-2 border border-gray-400 p-1' onClick={toggleDonorsPopup}>
              <p className='text-sm rounded-full'>Donors {Object.keys(post.donor).length}</p>
            </a>

            <button className='float-right m-2 border border-gray-400 p-1' onClick={toggleReportPopup}>
              <p className='text-sm rounded-full'>Reports {Object.keys(post.reported).length}</p>
            </button>
          </div>
        </div>

        {showDonorPopup && ( 
          <PopupComponent 
            title="Donors" 
            items={Object.keys(post.donor)} 
            onClose={toggleDonorsPopup} 
          />
        )}

        {showReportPopup && (
          <PopupComponent 
            title="Reports" 
            items={Object.keys(post.reported)} 
            onClose={toggleReportPopup} 
          />
        )}
        
      </div>
    </div>
  );
}

export default FamCard;
