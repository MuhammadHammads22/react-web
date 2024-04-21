import React, { useState } from 'react';
import "../assets/css/create-post.css";
import {useCreatePostMutation} from "../../services/postApis";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';


const CreatePostPage = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const [formData, setFormData] = useState({
    creator: '1',
    post_type: '',
    kind: '',
    seeker: '',
    description: '',
    address: '',
    phone_number: '',
    needed_money: 0,
    seeker_vid: '',
    place_vid: '',
    bank_title: '',
    bank_name: '',
    account_number: '',
    iban_number: '',
  });



  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSeekerFileChange = async (e) => {
    const file = e.target.files[0]; // it
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/post/upload-file/', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const uploadedFileUrl = response.data.url;
        console.log('File uploaded successfully:', uploadedFileUrl);
        
        setFormData(prevFormData => ({
          ...prevFormData,
          seeker_vid: uploadedFileUrl,
        }));

        setSuccessMessage('Seeker video uploaded successfully');
      } else {
        console.error('Failed to upload file:', file.name);
        setErrorMessage('Failed to upload seeker video');
      }
    } catch (error) {
      console.error('Error occurred while uploading file:', error);
      setErrorMessage('Error uploading seeker video');
    }
  };

  const handlePlaceFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/post/upload-file/', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const uploadedFileUrl = response.data.url;
        console.log('File uploaded successfully:', uploadedFileUrl);
        
        setFormData(prevFormData => ({
          ...prevFormData,
          place_vid: uploadedFileUrl,
        }));

        setSuccessMessage('Place video uploaded successfully');
      } else {
        console.error('Failed to upload file:', file.name);
        setErrorMessage('Failed to upload Place video');
      }
    } catch (error) {
      console.error('Error occurred while uploading file:', error);
      setErrorMessage('Error uploading Place video');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("type of form ", typeof formData);
  
    // Convert formData to JSON format
    const jsonData = JSON.stringify(formData);
  
    // Create post
    const config = {
      headers: {
        'Content-Type': 'application/json', // Use JSON content type
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/post/create/', jsonData, config);
      console.log(response);
    } catch (error) {
      console.error('Error occurred while creating post:', error);
    }
  };


  return (
    <div className="page">
      <form onSubmit={handleSubmit} className='create-form-card' enctype="multipart/form-data">

        <h1 className="text-3xl font-bold mb-8">Create Post</h1>

        <div className='grid grid-cols-2 gap-4'>
        <div>
        {/* Seeker */}
        <div className="mb-4 field-width">
          <label htmlFor="seeker" className="block font-semibold mb-2">Name</label>
          <input
            type="text"
            id="seeker"
            name="seeker"
            placeholder='Name of Seeker: Bilal Ahmed'
            value={formData.seeker}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4 field-width">
          <label htmlFor="address" className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder='Address: 123 Main Street, Anytown USA'
            value={formData.address}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4 field-width">
          <label htmlFor="phone_number" className="block font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            placeholder='03xx-xxxxxx21'
            value={formData.phone_number}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        </div>
        
        <div>
        {/* Seeker Video */}
        <div className="mb-4 field-width">
          <label htmlFor="seeker_vid" className="block font-semibold mb-2">Seeker Video</label>
          <input
            type="file"
            id="seeker_vid"
            name="seeker_vid"
            onChange={handleSeekerFileChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
          {successMessage && <div>{successMessage}</div>}
          {errorMessage && <div>{errorMessage}</div>}
        </div>
        

        {/* Place Video */}
        <div className="mb-4 field-width">
          <label htmlFor="place_vid" className="block font-semibold mb-2">Place Video</label>
          <input
            type="file"
            id="place_vid"
            name="place_vid"
            onChange={handlePlaceFileChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
          {successMessage && <div>{successMessage}</div>}
          {errorMessage && <div>{errorMessage}</div>}
        </div>

        {/* Post Type */}
        <div className="mb-4 field-width">
          <label htmlFor="post_type" className="block font-semibold mb-2">Which place?</label>
          <select
            id="post_type"
            name="post_type"
            value={formData.place}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select place</option>
            <option value="house">House</option>
            <option value="ngo">NGO</option>
            <option value="masjid">Masjid</option>
            <option value="madrasa">Madrasa</option>
          </select>
        </div>

        </div>

        </div>

        <div className='grid grid-cols-2 gap-4'>
        
        <div className='mt-10'>
        {/* Post Type */}
        <div className="mb-4 field-width">
          <label htmlFor="post_type" className="block font-semibold mb-2">Asking for What?</label>
          <select
            id="post_type"
            name="post_type"
            value={formData.post_type}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Purpose</option>
            <option value="fam">Asking for Family</option>
            <option value="masjid">Asking for Masjid</option>
            <option value="madrasa">Asking for Madrasa</option>
            <option value="ngo">Asking for NGO</option>
            <option value="myself">Asking for Myself</option>
          </select>
        </div>

        {/* Kind */}
        <div className="mb-4 field-width">
          <label htmlFor="kind" className="block font-semibold mb-2">What you need?</label>
          <select
            id="kind"
            name="kind"
            value={formData.kind}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Need</option>
            <option value="zakat">Zakat</option>
            <option value="donation">Donation</option>
            <option value="help">Help</option>
          </select>
        </div>

        {/* Needed Money */}
        <div className="mb-4 field-width">
        <label htmlFor="needed_money" className="block font-semibold mb-2">How much money do you need?</label>
          <input
            type="number"
            id="needed_money"
            name="needed_money"
            value={formData.needed_money}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>



        </div>
        

        
      <div className='mt-10'>

        {/* Bank Title */}
        <div className="mb-4 field-width">
          <label htmlFor="bank_title" className="block font-semibold mb-2">Bank Title</label>
          <input
            type="text"
            id="bank_title"
            name="bank_title"
            value={formData.bank_title}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Bank Name */}
        <div className="mb-4 field-width">
          <label htmlFor="bank_name" className="block font-semibold mb-2">Bank Name</label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            value={formData.bank_name}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Account Number */}
        <div className="mb-4 field-width">
          <label htmlFor="account_number" className="block font-semibold mb-2">Account Number</label>
          <input
            type="text"
            id="account_number"
            name="account_number"
            value={formData.account_number}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* IBAN Number */}
        <div className="mb-4 field-width">
          <label htmlFor="iban_number" className="block font-semibold mb-2">IBAN Number</label>
          <input
            type="text"
            id="iban_number"
            name="iban_number"
            value={formData.iban_number}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        </div>

        </div>

        {/* Description */}
        <div className="mb-4 post-description">
          <label htmlFor="description" className="block font-semibold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          {isLoading ? (
            <div className="inline-block loading-icon">
              <AiOutlineLoading3Quarters />
            </div>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create Post
            </button>
          )}
        </div>

        
      </form>
    </div>
  );
};

export default CreatePostPage;
