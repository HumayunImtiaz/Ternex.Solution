import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import list from '../../public/list.json'


function Webservice() {
    const [Thumbnail , getThumb]=useState([])

    useEffect(()=>{

        const getThumbnail=async()=>{
       
            try {
              const res = await fetch("/list.json"); // Fetch from public folder
              const data = await res.json(); // Convert to JSON

              // Use the correct key "catagory" instead of "category"
              const filteredData = data.filter(item => item.catagory === "Web");

              console.log(filteredData); // Check filtered output
              getThumb(filteredData); // Update state
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

        getThumbnail();
    },[])
   
    // const filterData=list.filter((data)=>data.catagory==="Free")
    
    var settings = {
        dots: true,

        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoPlay: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // infinite: true,
              dots: true,
              autoPlay: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoPlay: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoPlay: true,
            }
          }
        ]
      };


  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 ">
        <div className='flex-col text-center '> 
        <h1 className='font-bold text-3xl pb-2'>Web Solutions for Every Business</h1>
        <p className='text-lg mt-3'>
          Our website development packages offer tailored solutions for businesses of all sizes, ensuring a fast, secure, and user-friendly online presence. From sleek landing pages to fully functional e-commerce stores, 
          we provide responsive designs, seamless navigation, and optimized performance to help you stand out in the digital world.
      </p>
        </div>
        <div className='mt-6 w-[97%] md:w-[100%] pb-8'>
    <Slider {...settings}>
    {/* <div className='mt-8 grid grid-cols-1 md:grid-cols-3'> */}
      {Thumbnail.map((item)=>(
        <Cards item={item} key={item.id} />
      ))}
      {/* </div> */}
      </Slider>

    </div>
    </div>

   
    
    </>
  )
}

export default Webservice