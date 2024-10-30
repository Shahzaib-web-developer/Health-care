import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../asset/assets_frontend/assets'
import RelatedDoc from '../components/RelatedDoc'
const Appointment = () => {
  const { _id } = useParams()
  const { doctors } = useContext(AppContext)
  const [doctorInfo, setDoctorInfo] = useState("")
  const [docSlots, setDocSlots ] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === _id)
    setDoctorInfo(docInfo)
    // console.log(docInfo)
  }
  const getCurrDate = async () =>{
    
    setDocSlots([])
    
    //getting current date
      let today = new Date()
      for( let i = 0;  i < 7;  i++ ){
      //getting date with index i=0
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      
      // getting end time 
      let endTime = new Date(today)
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0 ,0 ,0)
      
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() + 1)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      
      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}) 

        // push the timeSlots to array
        timeSlots.push({
          timeDate: new Date(currentDate),
          time:formattedTime
        })

     //increment time with 30 minutes
     currentDate.setMinutes(currentDate.getMinutes() + 30)
     
      }

      setDocSlots(prev =>([... prev , timeSlots]))
     }
  }
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, _id])

  useEffect(() => {
    getCurrDate()
  }, [doctorInfo])

  // useEffect(() => {
  //   console.log(docSlots)
  // }, [doctorInfo])

  return (
    <div className='mt-12 mb-20'>
      {doctorInfo ? (
        <div className="flex">
          <div className='flex flex-col md:flex-row gap-4'>
            
            <img className='w-[100%] sm:w-80 border border-blue-500 bg-blue-400 rounded-xl ' src={doctorInfo.image} alt={doctorInfo.name} />
             
            <div>
            <div className='py-10 px-5 border border-gray-500 rounded-2xl'>
              <div className='flex gap-4'>
              <h2 className='text-3xl font-medium'>{doctorInfo.name}</h2>
              <img src={assets.verified_icon} alt="" />
              </div>
              <div className="flex gap-2 mt-2">
                <p className='text-gray-700' >{doctorInfo.degree} - </p>
                <p className='text-gray-700'>{doctorInfo.speciality}</p>
                <p className='text-gray-700 border border-gray-200 px-1 rounded-full'>{doctorInfo.experience}</p>
              </div>
              <div className='flex gap-2 font-medium'>
                <p className='my-2'>About</p>
                <img className='w-4' src={assets.info_icon} alt="" />
              </div>
              <p className='text-gray-500'>{doctorInfo.about}</p>
              <div className='flex gap-2 items-center my-4 '>
              <p className='text-gray-700'>Appointment Fee :  </p> 
              <p className='font-medium text-lg'> ${doctorInfo.fees}</p>
              </div>

            </div>
            
            </div>
          </div>

        </div>
      ) : (
        <p>Loading doctor information...</p>
      )}
      <div className="md:ms-[25%] m-auto">
      <p className='text-2xl text-gray-600 py-6'>Booking Slots</p>
      <div className='flex flex-wrap  gap-5'>
        {
          docSlots.map((item, index)=>(
            <div onClick={()=>setSlotIndex(index)} className={` rounded-full flex flex-col justify-center items-center w-20 h-28 cursor-pointer shadow-md ${slotIndex === index ? "bg-blue-500 text-white": "border border-gray-200"}`}  key={index}>
              <p>{item[0] && daysOfWeek[item[0].timeDate.getDay()]}</p>
              <p>{item[0] && [item[0].timeDate.getDate()]}</p>
            </div>

          ))

        }
      </div>
      <div className='flex py-6 gap-4 overflow-x-scroll timeslot'>
        {
          docSlots.length && docSlots[slotIndex].map((item, index)=>(
            <p onClick={()=>setSlotTime(item.time )} className={` rounded-full flex shrink-0 justify-center items-center w-28 h-10 cursor-pointer shadow-md ${item.time === slotTime ? "bg-blue-500 text-white": "border border-gray-200 text-gray-500"}`} key={index}>
                {item.time.toLowerCase()}
            </p>
          ))
        }
      </div>
      <button className='bg-blue-500 text-white w-60 h-12 flex justify-center items-center rounded-full cursor-pointer shadow-lg hover:bg-white hover:border border-gray-300 hover:text-black'>Book an Appointment</button>
      </div>
      <RelatedDoc docId={_id} speciality={doctorInfo.speciality} />
    </div>
  )
}

export default Appointment
