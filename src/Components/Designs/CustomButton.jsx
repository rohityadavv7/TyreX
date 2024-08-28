import React from 'react'

function CustomButton({text}) {
  return (
    <div>
        
        <button
        class="bg-[#9741F8] text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-[#A855F7] active:bg-purple-900 focus:outline-none"
        >
            {text}
        </button>

    </div>
  )
}

export default CustomButton;