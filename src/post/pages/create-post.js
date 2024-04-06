import React, { useState, useEffect } from 'react';
import "../assets/css/create-post.css";
import {useCreatePostMutation} from "../../services/postApis";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';

const CreatePostPage = () => {
  const userInfo = useSelector((state) => state.user_info); // Access user information from Redux store


  const [formData, setFormData] = useState({
    creator: userInfo.name || '',
    post_type: '',
    kind: '',
    seeker: '',
    blur_face: false,
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

  useEffect(() => {
    // Update creator field whenever user info changes
    setFormData((prevData) => ({
      ...prevData,
      creator: userInfo.name || '',
    }));
  }, [userInfo]);


  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Create post
    createPost(formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  };

  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-8">Create Post</h1>
      <form onSubmit={handleSubmit}>

        {/* Seeker */}
        <div className="mb-4">
          <label htmlFor="seeker" className="block font-semibold mb-2">Seeker</label>
          <input
            type="text"
            id="seeker"
            name="seeker"
            value={formData.seeker}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

      {/* Address */}
      <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone_number" className="block font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* Post Type */}
        <div className="mb-4">
          <label htmlFor="post_type" className="block font-semibold mb-2">Post Type</label>
          <select
            id="post_type"
            name="post_type"
            value={formData.post_type}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Post Type</option>
            <option value="fam">Family</option>
            <option value="org">Organization</option>
            <option value="org">Masjid</option>
            <option value="org">Madrasa</option>
            <option value="org">NGO</option>
          </select>
        </div>

        {/* Kind */}
        <div className="mb-4">
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
            <option value="help">Donation</option>
            <option value="help">Help</option>
          </select>
        </div>

        

        {/* Blur Face */}
        <div className="mb-4">
          <label htmlFor="blur_face" className="block font-semibold mb-2">Blur Face</label>
          <input
            type="checkbox"
            id="blur_face"
            name="blur_face"
            checked={formData.blur_face}
            onChange={handleChange}
            className="mr-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
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

        
        {/* Needed Money */}
        <div className="mb-4">
          <label htmlFor="needed_money" className="block font-semibold mb-2">Needed Money</label>
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

        {/* Seeker Video */}
        <div className="mb-4">
          <label htmlFor="seeker_vid" className="block font-semibold mb-2">Seeker Video</label>
          <input
            type="text"
            id="seeker_vid"
            name="seeker_vid"
            value={formData.seeker_vid}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Place Video */}
        <div className="mb-4">
          <label htmlFor="place_vid" className="block font-semibold mb-2">Place Video</label>
          <input
            type="text"
            id="place_vid"
            name="place_vid"
            value={formData.place_vid}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Bank Title */}
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mb-4">
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
