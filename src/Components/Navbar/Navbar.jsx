import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate= useNavigate()
    const createjob = ()=>{

        navigate('/createjob')
    } 
    const myjob = ()=>{

        navigate('/getjob')
    } 
    const home = ()=>{

        navigate('/')
    } 
    const signup = ()=>{

        navigate('/signup')
    } 
    const about = ()=>{

        navigate('/about')
    } 
  return (
 
    <div classNameName='container mx-auto my-10'>
           <nav className=" mx-auto ">
    <div className="flex flex-wrap items-center justify-between  mx-auto">
        <a href="#" className="flex items-center">
           
            <span className="text-2xl font-mono  font-bold  text-white" onClick={home}>Real Estate</span>
        </a>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <Link to="/signup"
                onClick={signup}
                className="text-white focus:ring-4font-semibold rounded text-xl px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 hover:bg-[#174B5A] bg-[#37A3C3] focus:outline-none ">SignUp</Link>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2 ] text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-16 lg:mt-0">
                <li>
                    <a href="search"
                        className="block py-2 pl-3 pr-4 text-2xl font-medium  bg-[#37A3C3] text-white rounded lg:bg-transparent lg:hover:text-[#37A3C3] lg:p-0 text-white"
                        aria-current="page">Start the Search</a>
                </li>
                <li>
                    <a href="#"
                        className="block text-2xl font-medium py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#37A3C3] lg:p-0 " onClick={myjob}>My Properties</a>
                </li>
                
                <li>
                    <a href="#"
                    onClick={createjob}
                        className="block text-2xl font-medium py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#37A3C3] lg:p-0 ">Post the Homes</a>
                </li>
                <li>
                    <a href="#"
                        className="block text-2xl font-medium py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#37A3C3] lg:p-0 " onClick={about}>About Us</a>
                </li>
                
            </ul>
        </div>
    </div>
</nav>
    </div>

  )
}

export default Navbar