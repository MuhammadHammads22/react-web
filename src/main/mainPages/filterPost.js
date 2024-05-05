import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaFilter } from "react-icons/fa";

const FilterPost = () => {
  const [filterData, setFilterData] = useState({});
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = async (event) => {
    const {name, value} = event.target;
    setFilterData({...filterData, [name]: value});
  };

  useEffect(() => {
    if (isOpen) {
      const queryParams = Object.entries(filterData)
        .filter(([key, value]) => value !== '') 
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
      const url = queryParams ? `/filter?${queryParams}` : '/'; 
      navigate(url);
    }
  }, [filterData, isOpen, navigate]);

  return (
    <div className="relative inline-block mb-3 w-full">
      <button className="flex w-full items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white"
      onClick={handleFilter}
      aria-expanded={isOpen}
      aria-haspopup="true"
      >
        <FaFilter />
        <p className="pl-5">Filter Posts</p>
      </button>

      <div
        className={isOpen ? "flex relative w-full rounded-md" : "hidden"}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="account-menu"
      > 

      <div className='grid grid-cols-1 gap-2 mb-3'>
        
        <div className='flex flex-col ps-4'>
          <label htmlFor='support' className='text-sm w-full font-medium text-slate-950 block dark:text-white'>Support</label>
          <select id='support' name='support' onChange={handleChange} className='flex h-5 rounded-md color-slate-950 dark:bg-gray-600 dark:text-blue-50 pl-1'>
            <option value=''>Select</option>
            <option value='family'>Needy Family</option>
            <option value='madrasa'>Madrasa</option>
            <option value='masjid'>Masjid</option>
            <option value='ngo'>NGO</option>
            <option value='person'>Person</option>
          </select>
        </div>
        
        <div className='flex flex-col ps-4 '>
          <label htmlFor='need' className='text-sm w-full font-medium text-slate-950 block dark:text-white'>Support by</label>
          <select id='need' name='need' onChange={handleChange} className='flex h-5 rounded-md color-slate-950 dark:bg-gray-600 dark:text-blue-50 pl-1'>
            <option value=''>Select</option>
            <option value='zakat'>Zakat</option>
            <option value='donation'>Donation</option>
            <option value='help'>Help</option>
          </select>
        </div>

        <div className='flex flex-col ps-4'>
          <label htmlFor='need_amount_min' className='text-sm w-full font-medium text-slate-950 block dark:text-white'>Needed Amount</label>
          <input type='number' id='need_amount_min' name='need_amount_min' className='flex h-5 rounded-md color-slate-950  bg-slate-200 dark:bg-gray-600 dark:text-blue-50 pl-1' onChange={handleChange} placeholder='0'/>
        </div>


        <div className='flex flex-col ps-4'>
          <label htmlFor='bank_name' className='text-sm w-full font-medium text-slate-950 block dark:text-white'>Bank Name</label>
          <input type='text' id='bank_name' name='bank_name' className='flex h-5 rounded-md color-slate-950  bg-slate-200 dark:bg-gray-600 dark:text-blue-50 pl-1' onChange={handleChange} placeholder='Bank Name' />
        </div>
        
      </div>

      </div>
    </div>

  )
}


export default FilterPost
