import React from 'react'

function Questions() {
  return (
    <div className='w-11/12 mx-auto m-6 flex flex-col'>
        <div className='divider mb-6'></div>

        <div className='text-5xl font-normal mb-4'>
            <h1>Frequently Asked <span className='text-NewBlue'>Questions</span> </h1>
        </div>
        <div className="join join-vertical w-full font-normal">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    <p> What is <span className='text-NewBlue'>TyreX </span>?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                <p>TyreX is an online marketplace where users can purchase a variety of Tyres, according to their needs to start their journey around the world.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How are we different from the competition? </p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illo..</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How do I get details?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, excepturi. Distinctio, omnis impedit! Aliquid, eveniet!</p>
                </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>What payment methods are accepted?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>We accept major credit and debit cards, PayPal, and other payment methods as specified on the checkout page.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">
                    <p>How do I avail warranty?</p>
                </div>
                <div className="collapse-content text-richblack-100"> 
                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, assumenda reiciendis dicta praesentium excepturi atque!</p>
                </div>
            </div>

            
        </div>
        <div className='font-normal mt-6 text-xl'>
            <p>Still have Queries? <span className='text-NewBlue'>Contact Us</span></p>
        </div>
        <div className='divider mt-16 mb-10' ></div>
    </div>
  )
}

export default Questions