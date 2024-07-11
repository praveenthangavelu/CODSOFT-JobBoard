import React from 'react'
import network from '../Frames/network.png'
const People = () => {
  return (
    <div className=' flex mt-10'>
        <div className=' w-1/2 my-5 flex-row justify-center mx-auto'>
        <div className='w-[65%] py-5 ml-52  mt-16 '>

            <h1 className='text-white text-3xl sans '>So Many People Are <span className='text-[#37A3C3]'>Engaged</span> All Over the World</h1>/
            <p className='text-white text-md '>Lrem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga dolore nisi sequi molestiae totam et explicabo recusandae minus? Adipisci repudiandae quam debitis! Temporibus, minima? Iure omnis ullam doloremque? Voluptatibus!</p>
        </div>
        </div>
        <div className='w-1/2  mx-auto'>
            <div className=' flex justify-center py-2  '>
                    <img src={network} alt="" />
            </div>
        </div>
    </div>
  )
}

export default People