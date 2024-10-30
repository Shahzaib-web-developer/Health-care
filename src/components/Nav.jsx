import React, { useState } from 'react'
import { assets } from '../asset/assets_frontend/assets'
import { Link , useNavigate } from 'react-router-dom'
const Nav = () => {

  const [visible, setVisible] = useState("")

  const handleLink = (linkname) => {
    setVisible(linkname)
  }

  const navigate = useNavigate()
  const [menu, setMenu]  = useState(false)
  const[token, setToken] = useState(true)
  const[crossIcon, setCrossIcon] = useState(true)

  const handleMenu = ()=>{
    setMenu(!menu)
    setCrossIcon(!crossIcon)
  }
  return (
    <nav>
      <div className='flex justify-between py-5 border-b-2 border-blue-100'>
        <Link to={"/"}>
          <img src={assets.logo} alt="" className='w-44' />
        </Link>
        <ul className='hidden md:flex items-center justify-center gap-x-6 lg:gap-x-10'>
          <Link to={"/"} onClick={() => handleLink("home")} className={`${visible === "home" ? "active" : ""}`} >
            <li>HOME</li>
            <hr className='border-none outline-none h-0.5 w-[60%] bg-blue-500 text-center m-auto hidden' />
          </Link>
          <Link to={"/doctors"} onClick={() => handleLink("doctor")} className={`${visible === "doctor" ? "active" : ""}`}>
            <li>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 w-[60%] bg-blue-500 text-center m-auto hidden' />
          </Link>
          <Link to={'/about'} onClick={() => handleLink("about")} className={`${visible === "about" ? "active" : ""}`}>
            <li >ABOUT</li>
            <hr className='border-none outline-none h-0.5 w-[60%] bg-blue-500 text-center m-auto hidden' />
          </Link>
          <Link to={"contact"} onClick={() => handleLink("contact")} className={`${visible === "contact" ? "active" : ""}`}>
            <li >CONTACTS</li>
            <hr className='border-none outline-none h-0.5 w-[60%] bg-blue-500 text-center m-auto hidden' />
          </Link>
        </ul>
        <div className='hidden md:flex '>
          {
            token ?<div className='md:flex items-center w-[100%] gap-x-2 group relative'>
                  <img src={assets.profile_pic} className='w-10 rounded-full ' alt="" />
                  <img src={assets.dropdown_icon} className='w-3' alt="" />
                  <div className="absolute hidden top-5 right-12 group-hover:block   ">
                  <div className="flex flex-col bg-white rounded-lg shadow-lg z-50">
                    <div className="p-4 bg-gray-100 w-60 border border-gray-300 rounded-md">
                      <p className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded-md transition-all" onClick={()=>navigate("/profile")} >
                        My Profile
                      </p>
                      <p onClick={()=>navigate('/MyAppointment')} className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded-md transition-all">
                        My Appointment
                      </p>
                      <p className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded-md transition-all">
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            :  <button onClick={()=> navigate("/login")} className='hidden md:flex  bg-blue-500 text-white px-4 py-2 rounded-full border border-blue-500 hover:bg-white hover:text-blue-500'>Create Account</button>
          }
        </div>
      
        <div className="sm:flex items-center md:hidden ">

            {
              crossIcon ?
              <img onClick={handleMenu} className='w-12' src={assets.menu_icon} alt="" />:
              <img onClick={handleMenu} className='w-12' src={assets.cross_icon} alt="" />
            }

        </div>

      </div>

     {
      menu ?  <div className='flex flex-col-reverse mt-10'>
      <ul className='flex flex-col   mt-4 text-center md:hidden'>
        <Link to={"/"} onClick={() => handleLink("home")} className={`${visible === "home" ? "active" : ""}`} >
          <li className='hover:bg-slate-300 py-2'>HOME</li>
          <hr className='border-none outline-none h-0.5 w-[60px] bg-blue-500 text-center m-auto hidden   ' />
        </Link>
        <Link to={"/doctors"} onClick={() => handleLink("doctor")} className={`${visible === "doctor" ? "active" : ""}`}>
          <li className='hover:bg-slate-300 py-2'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 w-[60px] bg-blue-500 text-center m-auto hidden ' />
        </Link>
        <Link to={'/about'} onClick={() => handleLink("about")} className={`${visible === "about" ? "active" : ""}`}>
          <li className='hover:bg-slate-300 py-2' >ABOUT</li>
          <hr className='border-none outline-none h-0.5 w-[60px] bg-blue-500 text-center m-auto hidden ' />
        </Link>
        <Link to={"contact"} onClick={() => handleLink("contact")} className={`${visible === "contact" ? "active" : ""}`}>
          <li className='hover:bg-slate-300 py-2' >CONTACTS</li>
          <hr className='border-none outline-none h-0.5 w-[60px] bg-blue-500 text-center m-auto hidden ' />
        </Link>
      </ul>
      <div className='flex justify-center md:hidden '>
        {
          token ?<div className='md:hidden flex  items-center gap-x-2 group relative'>
                <img src={assets.profile_pic} className='w-10 rounded-full ' alt="" />
                <img src={assets.dropdown_icon} className='w-3' alt="" />
                <div className='absolute hidden top-0 right-0 pt-16     group-hover:block '>
                  <div className='flex flex-col gap-y-3 bg-gray-100 w-50 p-5'>
                      <p className='cursor-pointer '>My Profile</p>
                      <p className='cursor-pointer text-nowrap '>My Appointment</p>
                      <p className='cursor-pointer '>Logout</p>
                       
                  </div>
                </div>
          </div>
          :  <button onClick={()=> navigate("/login")} className='flex md:hidden  bg-blue-500 text-white px-4 py-2 rounded-full border border-blue-500 hover:bg-white hover:text-blue-500'>Create Account</button>
        }
      </div>
    </div>:""
     }

    </nav>
  )
}

export default Nav
