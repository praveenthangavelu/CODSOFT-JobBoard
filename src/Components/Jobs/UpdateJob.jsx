import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';

const UpdateJob = () => {
  const { id } = useParams(); 
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [salaryType, setSalaryType] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [description, setDescription] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/get/${id}`)
      .then(result => {
        const data = result.data;
        setCompanyName(data.companyName);
        setJobTitle(data.jobTitle);
        setCompanyLogo(data.companyLogo);
        setMaxPrice(data.maxPrice);
        setEmploymentType(data.employmentType);
        setExperienceLevel(data.experienceLevel);
        setMinPrice(data.minPrice);
        setDescription(data.description);
        setJobLocation(data.jobLocation);
        setSalaryType(data.salaryType);
      }) 
      .catch(err => console.log(err));
  }, [id]);

  const update = (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (
      !companyName.trim() ||
      !jobTitle.trim() ||
      !jobLocation.trim() ||
      !employmentType.trim() ||
      !experienceLevel.trim() ||
      !(minPrice && minPrice.toString().trim()) ||  // Convert minPrice to string and trim
      !(maxPrice && maxPrice.toString().trim())    // Convert maxPrice to string and trim
    ) {
      alert('Please fill in all required fields.');
      return;
    }
  
    axios
      .put(`http://localhost:3001/update/${id}`, {
        companyName,
        jobTitle,
        companyLogo,
        maxPrice,
        salaryType,
        jobLocation,
        employmentType,
        description,
        minPrice,
        experienceLevel,
      })
      .then((result) => {
        console.log(result);
        navigate('/getjob');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className='container relative mx-auto mt-5'>
      <Navbar />
   
      <div className='flex justify-center relative mt-24'>
        <div className="flex h-[630px] w-[1200px] relative z-50 flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
          <h1 className='text-white moda text-3xl flex -mt-3 mb-3 font-semibold'>Update The Job</h1>
          <div className="grid h-full w-full grid-cols-10 gap-4">
            <div className="col-span-3 row-span-1 flex justify-center items-center bg-white rounded card">
              <div className='text-white'>
                <h1 className='text-2xl font-semibold moda'>Company Name</h1>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className='focus:outline-[#37A3C3] bg-transparent border-[#37A3C3] border px-5 py-3 rounded placeholder:text-white' placeholder='company name....' />
              </div>
            </div>
            <div className="col-span-3 row-span-1 bg-white rounded card flex justify-center items-center">
              <div className='text-white'>
                <h1 className='text-2xl font-semibold moda'>Job Title</h1>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className='focus:outline-[#37A3C3] bg-transparent border-[#37A3C3] border px-5 py-3 rounded placeholder:text-white' placeholder='Job title....' />
              </div>
            </div>
            <div className="col-span-4 row-span-2 bg-white rounded py-2 card flex justify-center items-center">
              <div className='text-white'>
                <h1 className='text-2xl font-semibold moda'>Description</h1>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={7} className='bg-transparent mt-2 border-[#37A3C3] border focus:outline-[#37A3C3] px-5 rounded w-96 placeholder:text-white placeholder:p-5' placeholder='Type the description...' />
              </div>
            </div>
            <div className="col-span-4 row-span-1 bg-white rounded card flex justify-center items-center">
              <div className='text-white'>
                <h1 className='text-2xl font-semibold moda'>Job Location</h1>
                <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} className='focus:outline-[#37A3C3] bg-transparent border-[#37A3C3] border px-5 py-3 rounded placeholder:text-white' placeholder='Job Location....' />
              </div>
            </div>
            <div className="col-span-2 row-span-3 bg-white rounded card flex justify-center items-center">
              <div className='text-white w-full my-2'>
                <h1 className='text-2xl font-semibold moda text-center ml-2 mb-2'>Salary</h1>
                <div className='text-white text-center'>
                  <h1 className='text-lg font-semibold moda'>Minimum Salary</h1>
                  <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className='bg-transparent border-[#37A3C3] border px-5 focus:outline-[#37A3C3] mb-5 py-1.5 rounded w-1/2 placeholder:text-white' />
                </div>
                <div className='text-white text-center'>
                  <h1 className='text-lg font-semibold moda'>Maximum Salary</h1>
                  <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className='bg-transparent border-[#37A3C3] border px-5 focus:outline-[#37A3C3] py-1.5 rounded w-1/2 placeholder:text-white' />
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-2 bg-white py-5 rounded card flex justify-center items-center">
              <div className='text-white w-full mx-10'>
                <h1 className='text-2xl font-semibold moda text-center'>Employment Type</h1>
                <select
                  name="employmentType"
                  id="employmentType"
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="mt-1 block w-full border-[#37A3C3] rounded-md shadow-sm py-4 px-5 focus:outline-[#37A3C3] bg-transparent border sm:text-sm"
                >
                  <option className='bg-black/90' value="">Select Employment Type</option>
                  <option className='bg-black/90' value="Full-time">Full-time</option>
                  <option className='bg-black/90' value="Part-time">Part-time</option>
                  <option className='bg-black/90' value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
            <div className="col-span-4 row-span-3 bg-white rounded card flex justify-center items-center">
              <div className='text-white w-full mx-10'>
                <h1 className='text-2xl font-semibold moda text-center'>Experience Level</h1>
                <select
                  name="experienceLevel"
                  id="experienceLevel"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="mt-1 block w-full border-[#37A3C3] px-5 bg-transparent border rounded-md shadow-sm py-4 focus:outline-[#37A3C3] sm:text-sm"
                >
                  <option className='bg-black/90' value="">Select Experience Level</option>
                  <option className='bg-black/90' value="Internship">Internship</option>
                  <option className='bg-black/90' value="Entry Level">Entry Level</option>
                  <option className='bg-black/90' value="Mid Level">Mid Level</option>
                  <option className='bg-black/90' value="Senior Level">Senior Level</option>
                  <option className='bg-black/90' value="Executive Level">Executive Level</option>
                </select>
              </div>
            </div>
            <div className="col-span-6 row-span-2 bg-white rounded card flex justify-center items-center">
              <div className='text-white w-full mx-10 my-8'>
                <h1 className='text-2xl font-semibold moda text-center'>Salary Type</h1>
                <select
                  name="salaryType"
                  id="salaryType"
                  value={salaryType}
                  onChange={(e) => setSalaryType(e.target.value)}
                  className="mt-1 block w-full border-[#37A3C3] px-5 bg-transparent border rounded-md shadow-sm py-4 focus:outline-[#37A3C3] sm:text-sm"
                >
                  <option className='bg-black/90' value="">Select Salary Type</option>
                  <option className='bg-black/90' value="Monthly">Monthly</option>
                  <option className='bg-black/90' value="Weekly">Weekly</option>
                  <option className='bg-black/90' value="Daily">Daily</option>
                  <option className='bg-black/90' value="Hourly">Hourly</option>
                </select>
              </div>
            </div>
            <div className="col-span-4 row-span-2 bg-white rounded card flex justify-center py-7 items-center">
              <div className='text-white w-full'>
                <h1 className='text-2xl font-semibold moda text-center'>Company Logo</h1>
                <div className='w-full flex justify-center '>
                  <input
                    type="text"
                    value={companyLogo}
                    onChange={(e) => setCompanyLogo(e.target.value)}
                    className='focus:outline-[#37A3C3] bg-transparent border-[#37A3C3] border w-96   py-2 rounded placeholder:text-white'
                    placeholder='Company Logo URL...'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute w-[690px]  bg-[#37A3C3] rounded -bottom-6 left-5 z-50   text-center'>
            <button className='text-white text-2xl px-8 py-2  rounded moda' onClick={update}>Update Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
