import React, {useEffect, useState} from 'react'
import {useFilterMutation} from '../../services/postApis'
import {Link, useNavigate} from 'react-router-dom'

const FilterPost = () => {
  const [filterData, setFilterData] = useState({});
  const [filter] = useFilterMutation();
  const navigate = useNavigate();

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("filter post submitted");
  };

  return (
    <div>
      <form className='' onSubmit={handleSubmit}>
        <div className='grid grid-cols-3 gap-4'>
          <div>
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
  )
}

export default FilterPost
