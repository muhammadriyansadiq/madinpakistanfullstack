import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
<>
    <div className=' bg-green-800 w-full flex justify-center mt-24 flex-col items-center pb-2'>
        <div className=' w-11/12 text-white flex justify-between flex-col lg:flex-row  py-10'>
<div className=' w-6/12 lg:w-3/12  py-4   '>
<div>
    <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' h-[70px] w-[70px]' alt="" />
</div>
<div className=' mt-2'>Shopping Bachat Ke Saath!

Got Question? Call us 24/7</div>

<div className=' mt-2'>+92 300 8930442</div>
</div>


<div className=' flex justify-between flex-wrap w-10/12 lg:w-8/12 '>

    <div className=' py-4 w-5/12 lg:w-3/12'>
        <div>Information</div>
        <div className=' mt-12'>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>About Us</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Faq</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Terms & Condition</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Contact Us</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Help</div>
        </div>
    </div>

    <div className=' py-4 w-5/12 lg:w-3/12 '>
        <div>Customer Service</div>
        <div className=' mt-6 lg:mt-12'>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Payment Methods</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Money back</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Returns</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Shipping</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>Privacy Policy</div>
        </div>
    </div>

    <div className=' py-4 w-6/12 lg:w-3/12 '>
        <div>Get In Touch</div>
        <div className=' mt-12'>
            <div className=' mt-2'>Office # 19, 2nd Floor, United Trade Center, Gulshan-e-Iqbal Block 6, Karachi 75300</div>
            
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>contact@bachatmart.pk</div>
            <div className=' mt-2 cursor-pointer  hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-green-500'>+92 300 8930442</div>
        </div>
    </div>

</div>

        </div>

        <div className=' w-11/12'>
<hr />

<div className=' flex justify-between w-full mt-5'>
    <div className=' text-white'>Copyright © 2024. Powered By Digitech Infra Associates</div>
    <div className=' flex '>
<FaFacebookSquare className=' text-white text-[23px]'/>
<FaSquareInstagram className=' mx-3 text-white text-[23px]'/>
<IoLogoLinkedin className=' text-white text-[23px]'/>

    </div>
</div>
        </div>
    </div>
    



    </>
  )
}

export default Footer