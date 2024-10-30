import React from 'react'
import { assets } from '../asset/assets_frontend/assets'
import { useLocation } from 'react-router-dom'
const Footer = () => {
    const location = useLocation()
    const pathName = location.pathname
  return (
    <div className='mt-12'>

        {
            pathName !== "/login" || pathName !== "/profile" &&(
            <div className='flex flex-col lg:flex-row justify-between rounded-md  bg-blue-600   mb-12'>
            <div className='w-[100%] flex flex-col justify-center py-16'>
                <div className='max-w-[600px] px-3 m-auto'>
                <h1 className='text-white font-bold  text-3xl md:text-4xl lg:text-5xl mb-4 '>Book Appointment With 100% Trusted Doctors</h1>
                        <div className='mt-12 flex justify-center lg:block'>
                            <a href='#' className='px-8 py-4 bg-white text-black rounded-full w-[225px] flex gap-4 items-center  hover:gap-6 hover:-translate-y-1 transition-all duration-300'>
                            <span> Create account </span>  
                            <img src={assets.arrow_icon} alt="" />  
                            </a>
                        </div>
                </div>
            </div>
            <div className='w-full inline-block relative'>
                <img className='hidden lg:flex absolute bottom-0 left-40 w-[50%]  z-10' src={assets.appointment_img} alt="" />
            </div>
       </div>
       )
        }


       <div className='flex flex-wrap items-center justify-between gap-8 mb-8 '>
        <div >
            <img className='w-40 mb-8' src={assets.logo} alt="" />
            <p className='max-w-[420px] text-justify text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h2 className='text-3xl font-medium mb-8'>Company</h2>
            <ul className='flex flex-col gap-x-3'>
              <li className='text-gray-500 hover:text-black cursor-pointer'>Home</li>
              <li className='text-gray-500 hover:text-black cursor-pointer'>About us</li>
              <li className='text-gray-500 hover:text-black cursor-pointer'>Delivery</li>
              <li className='text-gray-500 hover:text-black cursor-pointer'>Term & policy</li>
            </ul>
        </div>
        <div>
            <h2 className='text-3xl font-medium mb-8'>Get In Touch</h2>
            <div className='' >
            <a className='text-gray-500  hover:text-black' href="tel:03042422121">+92-111-099-999</a>
            </div>
            <div className=''>
            <a className='text-gray-500  hover:text-black' href="mail to:muhammadshahzaibitx@gmail.com">hospital@gmail.com</a>
            </div>
        </div>
       </div>
       <div className="py-4 border-t-2 border-gray">
        <p className='text-gray-500 text-center'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
