import React, { useEffect, useState, useContext, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const filterRef = useRef()
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoctor, setFilterDoctor] = useState([])
  const [selectedSpe, setSelectedSpe] = useState("")

  

  const applyFilter = ()=>{
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality))
    } else {
      setFilterDoctor(doctors)
    }
  }

  const filterBySpeciality = (speciality)=>{
    if(selectedSpe === speciality){
      setSelectedSpe("")
      setFilterDoctor(doctors)
    }else{
      setSelectedSpe(speciality)
      setFilterDoctor(doctors.filter((doc)=> doc.speciality === speciality))
    }
  }


  useEffect(() => {
   applyFilter()
   const handleScroll = () => {
    // Ensure filterRef is not null
    if (!filterRef.current) return;

    let position = window.pageYOffset; // Get the current scroll position
    if (position > 200) {
       filterRef.current.classList.add("fixedFilter");
    } else {
       filterRef.current.classList.remove("fixedFilter");
    }
 };

 window.addEventListener("scroll", handleScroll); // Add scroll event listener

 // Clean up function to remove the event listener when the component unmounts
 return () => {
    window.removeEventListener("scroll", handleScroll);
 };
}, [doctors, speciality, filterRef]);

 

 
  return (
    <div className='mt-6 mb-20'>
      <p className='text-lg '>Browse through the doctors specialist.</p>
      <div className='flex gap-x-6 mt-4'>
        <div>
        <div className='flex flex-col gap-y-3' ref={filterRef}>
          <p onClick={() => filterBySpeciality("General physician")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "General physician" ? "text-black bg-gray-100" : "text-gray-500"}`}>General physician</p>
          <p onClick={() => filterBySpeciality("Gynecologist")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "Gynecologist" ? "text-black bg-gray-100" : "text-gray-500"}`}>Gynecologist</p>
          <p onClick={() => filterBySpeciality("Dermatologist")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "Dermatologist" ? "text-black bg-gray-100" : "text-gray-500"}`}>Dermatologist</p>
          <p onClick={() => filterBySpeciality("Pediatricians")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "Pediatricians" ? "text-black bg-gray-100" : "text-gray-500"}`}>Pediatricians</p>
          <p onClick={() => filterBySpeciality("Neurologist")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "Neurologist" ? "text-black bg-gray-100" : "text-gray-500"}`}>Neurologist</p>
          <p onClick={() => filterBySpeciality("Gastroenterologist")} className={`border border-gray-300 cursor-pointer rounded-lg ps-4 w-52 py-1 text-nowrap ${selectedSpe === "Gastroenterologist" ? "text-black bg-gray-100" : "text-gray-500"}`}>Gastroenterologist</p>
        </div>

        </div>
       

        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4  justify-center '>
          {filterDoctor.length === 0 ? (
            <p className='  text-lg font-medium'>No doctors available for this speciality.</p>
          ) : (
            filterDoctor.map((item, index) => (
              <div key={index} className='border border-blue-400 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-200'>
                <Link to={`/appointment/${item._id}`}>
                  <img className='bg-blue-100 w-full' src={item.image} alt={item.name} />
                  <div className='p-4'>
                    <div className='text-green-500 flex items-center gap-x-2'>
                      <p className='h-2 w-2 rounded-full bg-green-500'></p><p>Available</p>
                    </div>
                    <p className='text-lg'>{item.name}</p>
                    <p className='text-sm text-gray-600'>{item.speciality}</p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
