import React from 'react'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
    <div className='container relative mx-auto mt-5'>
        <Navbar/>
        <div class="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
  <div class="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
    <div class="flex flex-col items-center justify-center">
      <h1 class="md:text-5xl text-3xl font-bold text-center text-gray-800 dark:text-white">Job Board</h1>
      <p class="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600 dark:text-gray-200">Find your next job opportunity here.</p>
      <div className='grid grid-cols-2'>

     
      <div class="mt-7 flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="job">
            <img src="https://via.placeholder.com/150" alt="job" />
          </div>
          <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">Software Engineer</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">Company XYZ - Full Time - Remote</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">$80,000 - $120,000</p>
        </div>
      </div>

      <div class="mt-7 flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="job">
            <img src="https://via.placeholder.com/150" alt="job" />
          </div>
          <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">Data Analyst</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">Company ABC - Full Time - Onsite</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">$60,000 - $90,000</p>
        </div>
        
      </div>
      <div class="mt-7 flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="job">
            <img src="" alt="job" />
          </div>
          <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">UI/Ux Designer</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">Company ABC - Full Time - Onsite</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">$60,000 - $90,000</p>
        </div>
        
      </div>
      <div class="mt-7 flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="job">
            <img src="https://via.placeholder.com/150" alt="job" />
          </div>
          <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">Frontend Devloper</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">Company ABC - Full Time - Onsite</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">$60,000 - $90,000</p>
        </div>
        
      </div>

      <div class="mt-7 flex flex-col items-center">
        <div class="w-full flex flex-col items-center">
          <div class="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="job">
            <img src="https://via.placeholder.com/150" alt="job" />
          </div>
          <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">Backend Devloper</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">Company DEF - Part Time - Remote</p>
          <p class="text-sm text-center text-gray-500 dark:text-gray-300">$70,000 - $100,000</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
    <img src="https://www.topplus.ca/wp-content/uploads/2019/10/JOb-hiring2FB.jpg" alt="Job Board Image" class="h-full rounded-md object-cover object-center md:block hidden" />
    <img src="https://www.topplus.ca/wp-content/uploads/2019/10/JOb-hiring2FB.jpg" alt="Job Board Image" class="h-auto w-auto md:hidden block" />
  </div>
</div>


    </div>
  )
}

export default About