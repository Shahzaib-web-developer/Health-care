import React, { useContext, useState } from 'react';
// import { doctors } from '../asset/assets_frontend/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctor = () => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [doctorCount, setDoctorCount] = useState(10);

    const handleMore = () => {
        setDoctorCount(prevCount => prevCount + 5); 
    };

    return (
        <div id='speciality' className='mt-12'>
            <h2 className='text-center text-3xl font-medium mb-4'>Top Doctors to Book</h2>
            <p className='max-w-[600px] m-auto text-center'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    doctors.slice(0, doctorCount).map((item, index) => (
                        <div key={index} className='border border-blue-400 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-200'>
                             
                            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0 ,0 )}}> 
                                <img className='bg-blue-100 w-full' src={item.image} alt={item.name} />
                                <div className='p-4'>
                                    <div className='text-green-500 flex items-center gap-x-2'>
                                        <p className='h-2 w-2 rounded-full bg-green-500'></p><p>Available</p>
                                    </div>
                                    <p className='text-lg'>{item.name}</p>
                                    <p className='text-sm text-gray-600'>{item.speciality}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center justify-center mt-12">
                {doctorCount < doctors.length && (
                    <button onClick={handleMore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
                        More ...
                    </button>
                )}
            </div>
        </div>
    );
};

export default TopDoctor;
