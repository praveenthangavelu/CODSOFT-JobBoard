import React from 'react';
import Location from './Location';
import JobType from './JobType';
import JobTitle from './JobTitle';
import Salary from './Salary';


const SideBar = ({ handleChange, handleClick }) => {
  return (
    <div className='border-2 border-[#37A3C3] rounded p-10 py-5'>
      <div className=' text-white'>
        <h1 className='text-3xl  font-extrabold'>Job Collection</h1>
        <p className='text-sm text-white/60 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <Location handleChange={handleChange} />
      <JobType handleChange={handleChange} />
      <JobTitle handleChange={handleChange}/>
      <Salary handleChange={handleChange}/>
    </div>
  );
};

export default SideBar;
