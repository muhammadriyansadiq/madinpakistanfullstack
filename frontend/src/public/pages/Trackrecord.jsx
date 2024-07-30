import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Trackrecord = () => {
  return (

    <div>
         
        <Navbar />

        <div className=' w-full flex justify-center bg-zinc-300 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>Track Order</button>
        </div>
        
    </div>

    <div className=' w-full flex justify-center flex-col items-center  mt-16'>
        <div className=' w-11/12'>

        To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.


        </div>

        <div className=' w-11/12'>
            <input type="text" className=' w-6/12 mt-7 py-4 pl-3 rounded-md border-[2px]'  placeholder='Enter Your Order number' /><br />
            <button className=' bg-green-600 p-3 mt-4 rounded-md text-white'>Track Order</button>
        </div>
        
    </div>
        <Footer />
    </div>

  )
}

export default Trackrecord