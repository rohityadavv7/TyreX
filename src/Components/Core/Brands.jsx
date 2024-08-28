import React from 'react'
import Marquee from "react-fast-marquee";
import img1 from "../../assets/tyre1.jpeg"

function Brands() {
  return (
    <div className='w-11/12 mx-auto mt-8 pt-8'>

            <div className='mb-10 mt-6 text-5xl font-normal'>
                <h1>Brands we <span className='text-NewBlue'>Deal with</span></h1>
            </div>
            <div className='divider'></div>
        <Marquee pauseOnHover>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue text-xl mt-6 font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblue-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200}  className='p-2 object-cover  border-b'/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg p-3 h-[200px]   border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200}  className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg h-[200px]   p-3 border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b' />
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg h-[200px]   p-3 border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className=' p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            <div className='ml-8 rounded-lg h-[200px]  p-3 border border-richblack-100 hover:shadow-NewBlue hover:shadow-custom-medium
            hover:scale-95 transition-all duration-150'>
                <img src={img1} height={150} width={200} className='p-2 object-cover border-b '/>
                <h1 className='text-center text-NewBlue mt-6 text-xl font-normal font-semibold'>Bridgestone</h1>
            </div>
            
        </Marquee>


    </div>
  )
}

export default Brands