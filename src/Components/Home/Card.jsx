import React from 'react'
import './style.css'
const Card = ({data}) => {
    const{companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description}= data;
  return (
    <div className='  h-[250px] w-[440px] rounded card'>
        <div className=' flex space-x-7 bg-transparent mt-5 justify-center'>
                <h1 className='text-white    text-md font-medium bg-transparent border rounded px-3 py-1.5 '>{data.employmentType}</h1>
                <h1 className='text-white    text-md font-medium bg-transparent border rounded px-3 py-1.5 '>{data.jobLocation}</h1>
                <h1 className='text-white    text-md font-medium bg-transparent border rounded px-3 py-1.5 '><span className='text-lg font-bold bg-transparent'>$</span>{data.maxPrice}</h1>
        </div>
        <div className=' mt-6 py-2 bg-transparent flex'>
            <div className='w-[80%] mx-5 bg-transparent'>
            <h1 className='text-2xl moda  bg-transparent font-bold'>{data.jobTitle} </h1>
            <p className='text-xl font-medium  bg-transparent text-white'>{data.companyName}</p>
            </div>
            <div className='w-[42%] text-center bg-transparent'>
                <img src={data.companyLogo} alt="" className='bg-transparent' />
                
            </div>
        </div>
            <p className='text-sm mx-5 my-2 bg-transparent mt-2'>{data.description}</p>
    </div>
  )
}

export default Card