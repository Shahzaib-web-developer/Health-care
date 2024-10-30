import React from 'react'
import { assets } from '../asset/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

  return (
    <div className='mt-16'>
       <div className='flex flex-col lg:flex-row justify-between rounded-md  bg-blue-600 overflow-hidden'>
        <div className='w-[100%] flex flex-col items-center justify-center py-16 lg:py-32 '>
              <div className='max-w-[600px] px-3 m-auto'>
              <h1 className='text-white font-bold  text-3xl md:text-4xl lg:text-5xl mb-4 '>Book Appointment With Trusted Doctors</h1>
               <div className='sm:flex gap-x-3 '>
                <img className='' src={assets.group_profiles} alt="" />
                <p className='text-white text-medium'>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
               </div>
               <div className='mt-12 flex justify-center lg:block'>
  <a href='#specaility' className='px-8 py-4 bg-white text-black rounded-full w-[275px] flex gap-4 items-center  hover:gap-6 hover:-translate-y-1 transition-all duration-300'>
   <span> Book Appointment </span>  
   <img src={assets.arrow_icon} alt="" />  
  </a>
</div>

              </div>

        </div>
 
            <img className='relative bottom-0 w-full z-10' src={assets.header_img} alt="" />
         


       </div>
    </div>
  )
}

export default Header
