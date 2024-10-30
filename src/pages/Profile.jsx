import React, { useState } from 'react'
import { assets } from '../asset/assets_frontend/assets'
const Profile = () => {


const [userData, setUserData] = useState({
  name:"Muhammad Shahzaib",
  img : assets.profile_pic,
  email :" ",
  phone_no: "",
  address:{
    line1:" ",
    line2:" ",
  },
  gender:"",
  dob: ""
})

const [isEdit, setIsEdit] = useState(true)
const handleEdit =()=>{
  setIsEdit(!isEdit)
}
  return (
    <div>
      <img className='w-44 mt-4 rounded-2xl' src={userData.img} alt="" />
      <div className= ' text-lg mt-2 text-gray-900 flex items-center justify-between w-[30%] gap-5'>
      <p className='text-2xl text-gray-900 my-2 text-nowrap'>User Name</p>

      {
        isEdit ? <input type="email" className='border px-4 py-1 rounded-md outline-none' onChange={(e)=>setUserData(prev=> ({...prev , name: e.target.value}))} value={userData.name} placeholder="email" />: <p className='text-2xl text-gray-900 my-2' >{userData.name}</p>
      }  
      </div>
      <hr className='w-[50%]' />
      <p className='text-2xl'>Contact Info</p>
      <div className= ' text-lg mt-2 text-gray-900 flex items-center justify-between w-[30%] gap-5'>
        <p className='text-nowrap'>Email :  </p>
        {
          isEdit ? <input type="email" className='border px-4 py-1 rounded-md outline-none' onChange={(e)=>setUserData(prev=> ({...prev , email: e.target.value}))} value={userData.email} placeholder="email" />: <p>{userData.email}</p>
        }      
      </div>
      <div className= ' text-lg mt-2 text-gray-900 flex items-center justify-between w-[30%]  gap-5'>
        <p className='text-nowrap'>Phone :</p>
        {
          isEdit ?<input type="tel" className='border px-4 py-1 rounded-md outline-none' onChange={(e)=>setUserData(prev => ({...prev, phone_no:e.target.value}))} value={userData.phone_no} placeholder="Enter number" />: <p>{userData.phone_no}</p>
        }
        
      </div>
      <div className= ' text-lg mt-2 text-gray-900 flex items-center justify-between w-[30%]  gap-5'>
        <p className='text-nowrap'>Address:</p>
        <div className='flex flex-col gap-2'>
          {
          isEdit ?<input type="text" className='border px-4 py-1 rounded-md outline-none'  onChange={(e)=> setUserData(prev=> ({...prev, address: {...prev.address,  line1: e.target.value}}))} value={userData.address.line1}  placeholder="line1.." />: <p>{userData.address.line1}</p>
          }
          {
          isEdit ?<input type="text" className='border px-4 py-1 rounded-md outline-none' onChange={(e)=> setUserData(prev=> ({...prev, address: {...prev.address,  line2: e.target.value}}))} value={userData.address.line2} placeholder="line2.." />: <p>{userData.address.line2}</p>
          }
         
        </div>
      </div>
      <hr className='w-[50%] my-4' />
      <p className='text-2xl'>Personal Info</p>
      <div className= ' text-lg mt-2 text-gray-900 flex gap-5 items-center justify-between w-[30%]'>
        <p className='text-nowrap'>Gender :</p>
        {
          isEdit ?
          <select className='border px-4 py-1 rounded-md outline-none' onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
           : <p>{userData.gender}</p>
        }
      </div>
      <div className= ' text-lg mt-2 text-gray-900 flex gap-5 items-center justify-between w-[30%]'>
      <p className='text-nowrap'>Birthday :</p>
       {
        isEdit ?<input type="date" className='border px-4 py-1 gap-5 rounded-md outline-none' onChange={(e)=> setUserData(prev=> ({...prev, dob:e.target.value}))} value={userData.dob} placeholder="dob" />: <p>{userData.dob}</p>
       }
      </div>
      
      <button onClick={handleEdit} className='border border-blue-500 px-8 py-2 rounded-2xl mt-10 hover:bg-blue-500 hover:text-white'>{isEdit ? "Saved" : "Edit"}</button>    
    </div>
  )
}

export default Profile
