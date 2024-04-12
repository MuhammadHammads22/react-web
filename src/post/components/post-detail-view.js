import React, { useState, useEffect } from 'react';
import { useGetPostDetailQuery, useGetPostDocFilesQuery, useDownvoteMutation, useUpvoteMutation, useSaveMutation, useCommentMutation } from '../../services/postApis';
import { useParams } from 'react-router-dom';
import {  CircularProgress } from '@mui/material';
import { multiFormatDateString } from '../../lib/utils/DateConvertor';
import "../assets/css/post.css";
import { Link } from 'react-router-dom';
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import { BiDownvote, BiSolidDownvote } from "react-icons/bi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";


const PostDetailView = () => {

  const { slug } = useParams();
  const { data, isError, error, isLoading } = useGetPostDetailQuery(slug);
  const { docfiles, docfileIsLoading} = useGetPostDocFilesQuery(slug);
  

  const [upvote, setUpvotes] = useState(0)
  const [downvote, setDownvote] = useState(0)
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    if (data) {
      setUpvotes(data.upvote_count);
      setDownvote(data.downvote_count);
      setIsUpvoted(data.is_upvoted);
      setIsDownvoted(data.is_downvoted);
      setIsSaved(data.is_saved);
      //fetchComments(slug);
    }
  }, [data]);




  const [ upvoteMutation ] = useUpvoteMutation()
  const [ downvoteMutation ] = useDownvoteMutation()
  const [ saveMutation ] = useSaveMutation()
  const [ commentMutation ] = useCommentMutation()

  const handleUpvote = (event) => {
    event.stopPropagation();
    if (!isUpvoted) {
      setUpvotes(upvote + 1)
      setIsUpvoted(true)
      if (isDownvoted){
        setDownvote(downvote - 1)
        setIsDownvoted(false)
      };
      upvoteMutation(slug)
    }else {
      setUpvotes(upvote - 1)
      setIsUpvoted(false)
      upvoteMutation(slug)
    }
  }

  const handleDownvote = (event) => {
    event.stopPropagation();

    if (!isDownvoted) {
      setDownvote(downvote + 1)
      setIsDownvoted(true)
      if(isUpvoted){
        setUpvotes(upvote - 1)
        setIsUpvoted(false)
      };
      downvoteMutation(slug)
    }else{
      setDownvote(downvote - 1)
      setIsDownvoted(false)
      downvoteMutation(slug)
    }
  }

  // Save button

  const handleSave = (event) => {
    if (!isSaved) {
      setIsSaved(true)
      saveMutation(slug)
    }else{
      setIsSaved(false)
      saveMutation(slug)
    }
  }

   // Function to handle comment submission
  const handleSubmitComment = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("body", event.target.body.value);
    formData.append("slug", event.target.slug.value);
  
    try {
      const response = await commentMutation(formData);
      console.log("Response:", response);
      // Do something with the response if needed
      setComment("");
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately
    }
  };

  // Function to handle replying to a comment
  const handleReply = (commentId) => {
    // Handle reply action
  }

  if (isLoading){
    return <div><CircularProgress />Loading...</div>;
  }
  if (isError) return <div>Error: {error.message}</div>;
  
  return (
    <div className='PostDetailView'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
            <video className='detailVideo' controls controlsList="nodownload">
              <source src={data.seeker_vid} type="video/mp4" />
            </video>
        </div>

        <div className=''>
            <video className='detailVideo' controls controlsList="nodownload">
              <source src={data.place_vid} type="video/mp4" />
            </video>
        </div>
      </div>

      <div className='flex justify-between py-4'>
        
        <div className='flex'>
          <Link className='icon-container' rel="stylesheet">
            <p className='text-xs font-bold text-blue-500'>{data.creator}</p>
          </Link>
          
          <Link className='icon-container' rel="stylesheet" onClick={handleUpvote}>
            {isUpvoted ? <BiSolidUpvote className='text-xl text-green-500' /> : <BiUpvote className='text-xl' />}
            <p className='text-xs font-bold text-blue-500'>{upvote}</p>
          </Link>
          <Link className='icon-container' rel="stylesheet" onClick={handleDownvote}>
            { isDownvoted ? <BiSolidDownvote className='text-xl' /> : <BiDownvote className='text-xl' />}
            <p className='text-xs font-bold text-blue-500'>{downvote}</p>
          </Link>
          <Link className='icon-container' rel="stylesheet" onClick={handleSave}>
            {isSaved ? <FaBookmark className='text-xl' /> : <FaRegBookmark className='text-xl' />}
          </Link>
        </div>

        <div className='flex'>
          <p className='text-xs button'>Donors {data.report_count}</p>
          <p className='text-xs button'>Reports {data.donors_count}</p>
        </div>

      </div>

      <div className='justify-between py-4 grid grid-cols-2 gap-4'>
        <div className='flex-col seeker-info'>
          <p className=''>Seeker: {data.seeker}</p>
          <p className=''>Need: {data.kind}</p>
          <p className=''>From: {data.address}</p>
          <p className=''>Satisfied: {data.satisfied} No</p>
          <p className=''>verified: {data.verified}%</p>
          <p className=''>Without House: {data.without_house}yes</p>
          <p className=''>Phone # {data.phone_number}yes</p>
          <p className='text-gray-600'>{multiFormatDateString(data.created)}</p>
        </div>

        <div className='flex-col seeker-info'>
          <p className=''>Account Title: {data.bank_title} No</p>
          <p className=''>Bank Name: {data.bank_name}%</p>
          <p className=''>Account Number: {data.account_number}yes</p>
          <p className=''>IBAN: {data.iban_number}yes</p>
        </div>
      </div>

      <div className='flex description'>
        <p className='text-gray-700'>{data.description}</p>
      </div>

      <div className='py-4'>
        <h2 className='text-xl'>{data.comment_count} Comments</h2>
        
        <form onSubmit={handleSubmitComment} className='comment-form'>
          <input type='text' placeholder='Add a comment...' name='body' />
          <input type='hidden' value={data.slug} name='slug' />
          <button type='submit'>Comment</button>
        </form>
      </div>
    
    </div>
  );
}

export default PostDetailView




// <div className='mt-4'>
// {docfileIsLoading && docfiles && (
//       <>
//         {docfiles.map((data) => (
//           <p>{data}</p>
//         ))}
//       </>
//     )}
// </div>