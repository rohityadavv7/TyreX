import React from 'react'
import CustomButton from './CustomButton'

function Cards({heading, image}) {
  return (
    <div>
      
        <div class="w-60 h-80 border border-NewBlue hover:shadow-custom-medium hover:shadow-NewBlue p-3 flex flex-col rounded-2xl">
            <div class="h-48 bg-richblack-700 rounded-xl flex items-center">
                <img src={image} className='a aspect-video'/>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                    <span class="text-xl font-bold text-NewBlue mt-4">{heading}</span>
                    <p class="text-xs text-richblack-700">ID: 23432252</p>
                </div>
                <span class="font-bold  text-red-600 mt-4">$25.99</span>
                </div>
                <CustomButton text={"Get Details..."}/>
            </div>
        </div>
    </div>
  )
}

export default Cards