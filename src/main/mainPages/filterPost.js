import React, {useEffect, useState} from 'react'
import {useFilterMutation} from '../../services/postApis'
import {Link, useNavigate} from 'react-router-dom'
import { FaFilter } from "react-icons/fa";

const FilterPost = () => {
  const [filterData, setFilterData] = useState({});
  const [filter] = useFilterMutation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("filter post submitted");
    console.log(filterData);
    const {name, value} = event.target;
    setFilterData({...filterData, [name]: value});
  };

  const handleChange = async (event) => {
    const {name, value} = event.target;
    setFilterData({...filterData, [name]: value});
  };

  return (
    <div className="relative inline-block">
      <button className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-2 dark:text-white"
      onClick={handleFilter}
      aria-expanded={isOpen}
      aria-haspopup="true"
      >
        <FaFilter />
        <p className="pl-5">Filter Posts</p>
      </button>

      <div
        className={isOpen ? "flex relative mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black " : "hidden"}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="account-menu"
      >

      <form className='' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-4'>
          <div className='w-full inherit'>
            <label htmlFor='kind'>Kind of post</label>
            <select id='kind' name='kind' onChange={handleChange}>
              <option value=''>Select</option>
              <option value='zakat'>Zakat</option>
              <option value='donation'>Donation</option>
              <option value='help'>Help</option>
            </select>
          </div>
          <div>
            <label htmlFor='amount'>Needed Amount</label>
            <input type='number' id='amount' name='amount' />
          </div>
          <div>
            <label htmlFor='type'>Type</label>
            <select id='type' name='type' onChange={handleChange}>
              <option value=''>Select Type of post</option>
              <option value='fam'>Needy Family</option>
              <option value='madrasa'>Madrasa</option>
              <option value='masjid'>Masjid</option>
              <option value='ngo'>NGO</option>
              <option value='myself'>Person</option>
            </select>
          </div>
        </div>
        <button type='submit'>Filter</button>
      </form>
      </div>
    </div>

  )
}


export default FilterPost
