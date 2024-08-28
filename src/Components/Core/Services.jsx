import React from 'react'
import Cards from '../Designs/Cards'

import img1 from "../../assets/allignment.jpg"
import img3 from "../../assets/alloys.jpg"
import img2 from "../../assets/balancing.jpeg"
import img4 from "../../assets/repair.jpg"

function Services() {
  return (
    <div className='w-11/12 mx-auto flex flex-col space-y-3 mt-10 pt-4  gap-4 font-normal '>
        <div className='mb-10 mt-6 text-5xl font-normal -mb-4'>
                <h1>Our<span className='text-NewBlue'> Services</span></h1>
        </div>
        <div className='divider'></div>
        <div  className='flex flex-col items-center md:flex-row gap-10'>
            <Cards heading={"Wheel Balancing"} image={img2}/>
            <Cards heading={"Alloys"} image={img3}/>
            <Cards heading={"Repairing"} image={img4}/>
            <Cards heading={"Wheel Allignment"} image={img1}/>
        </div>

        <div className='divider'></div>


    </div>
  )
}

export default Services