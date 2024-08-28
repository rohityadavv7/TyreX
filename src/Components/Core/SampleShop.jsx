import ReactStars from 'react-stars'
import React from 'react'

import { MdVerified } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GoLocation } from "react-icons/go";
import CustomButton from '../Designs/CustomButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../assets/sample1.jpg"

import Slider from "react-slick";

function SampleShop() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
  };

  return (
    <div className='w-11/12 mx-auto space-y-2  shadow-NewBlue shadow-custom-dark rounded-lg flex flex-col md:flex-row lg:flex-row gap-16 font-normal mt-10 p-6'>
        {/* LEFT-PART */}
        <div className='w-[80%] md:w-[40%] ml-4 '>
            <h1 className='flex gap-4 text-xl md:text-3xl'>
                Sample Shop Tyres & Services
                <div className='text-xl flex space-x-1 items-center text-green-500'>
                    <MdVerified />
                    Verified
                </div>
            </h1>

            <div className='flex items-center gap-4'>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'} 
                    edit={false}
                    value={4}
                />

                <div>
                    <Link className='t underline'>
                        2334 reviews
                    </Link>
                </div>
            </div>

            <div className='mt-4'>
                
                <div
                    class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-[#BEBEBE] hover:-translate-y-2 hover:shadow-xl shadow-richblack-800"
                    >
                    <div
                        alt="image here"
                        className=" text-xl font-semibold justify-center flex items-center absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-richblack-200"
                    >
                        Get Directions
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h2 class="text-2xl font-bold mb-2 text-black border-b">Reach Us</h2>
                        <p class="text-richblack-600 line-clamp-3">
                            <div className=' flex gap-4'>
                                <GoLocation  className='text-[50px] '/>
                                <p className='text-[12px]'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                            </div>
                        </p>
                        <div className='mt-4 pt-4'>
                            <CustomButton text={"See more"}/>
                        </div>
                    </div >
                </div>

            </div>
        </div>

        {/* RIGHT_PART */}
        <div className='w-[80%] ml-10 md:w-[40%]'>

                <Carousel autoPlay  infiniteLoop centerMode>
                    <div>
                        <img src={img1}  height={300} width={400}/>
                       
                    </div>
                    <div>
                        <img src={img1} height={300} width={400}/>
                       
                    </div>
                    <div>
                        <img src={img1} height={300} width={400}/>
                        
                    </div>
                    <div>
                        <img src={img1} height={300} width={400}/>
                        
                    </div>
                    <div>
                        <img src={img1} height={300} width={400}/>
                        
                    </div>
                </Carousel>




        </div>
    </div>
  )
}

export default SampleShop