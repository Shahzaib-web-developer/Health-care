import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { specialityData } from '../asset/assets_frontend/assets';
import { Link, useNavigate } from 'react-router-dom';

const Speciality = () => {

   const navigate = useNavigate()

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 786,   
            settings: {
              slidesToShow: 3,   
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 400,   
            settings: {
              slidesToShow: 1,   
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          }
        ]
      };
      

  return (
    <div id='specaility' className='mt-12 max-w-[1000px] m-auto'>
      <h2 className='text-center text-3xl font-medium mb-4'>Find by Speciality</h2>
      <p className='max-w-[600px] m-auto text-center '>
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>

      <Slider {...settings}>
        {
          specialityData.map((item, index) => (
            <div key={index} className='text-center mt-6 mb-2 hover:-translate-y-2 transition-all duration-300'>
                    <div onClick={()=>{navigate(`/doctors/${item.speciality}`); scrollTo(0, 0)}}>
                <img src={item.image} alt={item.speciality} className="mx-auto mb-2" />
                <p>{item.speciality}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Speciality;
