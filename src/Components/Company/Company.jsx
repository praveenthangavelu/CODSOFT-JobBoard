import React from 'react'
import job from '../Frames/job.png'
import appilication from '../Frames/appilication.png'
import Notion from '../Frames/Notion.png'
import infosys from '../Frames/infosys.png'
import Loom from '../Frames/Loom.png'
import wipro from '../Frames/wipro.png'
import spline from '../Frames/Spline.png'


const Company = () => {
  return (
    <div>
              <div className=''>
          <div className='flex mt-10 '>
              <div className='w-1/2 my-10 '>
                <img src={job} alt="" className='h-80 mx-auto' />           
              </div>

              <div className='w-1/2 text-white'>
              <div className='w-[70%] mx-auto my-28   '>
                <h1 className='text-3xl font-bold sans'>Work With Exciting <span className='text-[#37A3C3]'>Companies</span></h1>
                <p className='text-sm font-medium w-[70%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia atque corrupti odit quo amet autem quis harum omnis, accusantium recusandae! Minus doloremque pariatur obcaecati dicta deleniti iste reprehenderit rerum.</p>
                <div className='mt-5'>
            <button className='px-8 bg-[#37A3C3] py-2 rounded text-lg font-bold'>Apply Now</button>

          </div>
              </div>
              </div>
          </div>
          {/* <div className='mt-5 mx-auto'> 
            <h1 className='sans  text-center text-white text-4xl'>Work with Exciting 100+ <span className='text-[#37A3C3]'>Companies</span>in the World</h1>
            <div className='grid my-10 grid-cols-5 mx-40'>
                <div className='px-5 py-7 w text-white mx-auto'><img src={Notion} alt="" /></div>
                <div className='px-5 py-7 w text-white mx-auto'><img src={Loom} alt="" /></div>
                <div className='px-5 py-7 w text-white mx-auto'><img src={infosys} alt="" /></div>
                <div className='px-5 py-7 w text-white mx-auto'><img src={wipro} alt="" /></div>
                <div className='px-5 py-7 w text-white mx-auto'><img src={spline} alt="" /></div>
            </div>
            <div className=' flex py-5'>
                <div className='w-1/2  text-center my-5'>
                        <img src={appilication} alt=""  className='h-96 mx-auto'/>
                </div>
                <div className=' w-1/2 py-2  my-auto'>
                <div className='w-[70%] ml-10'>

                <h1 className='text-white sans text-3xl '>Always Get The <span className='text-[#37A3C3]'>Latest</span> Information</h1>
                <p className='text-white mt-2 text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis, ullam odio magnam inventore consequuntur placeat molestiae sint, dolorem voluptatem enim, nemo quibusdam obcaecati! Tempora impedit dolore ducimus corrupti quibusdam.</p>
                <div className='my-10 text-center justify-center ml-5 flex items-center bg-white/40 w-[350px] py-1.5 rounded'>
                <input type="text" placeholder='' className=' rounded-l bg-transparent py-2 px-5'/>
                <button className='text-white font-bold bg-[#37A3C3] px-5 py-2 rounded-r'>Search</button>
                </div>
                </div>
                </div>

            </div>
          </div> */}
         
      </div>
    </div>
  )
}

export default Company