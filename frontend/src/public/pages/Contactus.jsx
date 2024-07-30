import React from 'react'
import Navbar from '../components/Navbar'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Subscribed from '../components/Subscribed';
import Footer from '../components/Footer';

const Contactus = () => {
  return (

    <div>
        <Navbar />
        <div className=' w-full flex justify-center bg-zinc-400 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>Contact Us</button>
        </div>
        
    </div>

<div className=' w-full flex justify-center mt-10'>
<div className=' w-11/12 flex justify-between flex-col lg:flex-row'>
<div className=' w-full  shadow-lg lg:w-7/12 border-[1px] py-7 lg:py-0'>
<div className=' w-full flex justify-center mt-4'>
    <div className=' w-11/12'>
    Get In Touch
    </div>
   
</div>


<div className=' w-full flex justify-center'>
    <div className=' w-11/12 text-[22px] font-semibold'>
    Write Us a Message
    </div>
</div>

<div className=' w-full flex justify-center'>
    <div className=' w-11/12   mt-4 flex justify-between'>
    <div className=' w-[47%] my-3'>
    <label htmlFor="text"  className=' block'>Your Name</label>
    <input type="text" id='text' placeholder=' Your Name' className=' border-[2px] w-full p-2 rounded-md'/>
    </div>
    <div className=' w-[47%] my-3'>
    <label htmlFor="subject" className=' block'>Your Subject</label>
    <input type="text" id='subject' placeholder=' Enter Subject' className=' border-[2px] w-full p-2 rounded-md'/>
    </div>
    </div>
</div>



<div className=' w-full flex justify-center mt-1'>
    <div className=' w-11/12   mt-1 flex justify-between'>
    <div className=' w-[47%] my-1'>
    <label htmlFor="email"  className=' block'>Your Email</label>
    <input type="email" id='email' placeholder=' Your Email' className=' border-[2px] w-full p-2 rounded-md'/>
    </div>
    <div className=' w-[47%] my-1'>
    <label htmlFor="phone" className=' block'>Your Phone No</label>
    <input type="phone" id='phone' placeholder=' Enter Your Phone' className=' border-[2px] w-full p-2 rounded-md'/>
    </div>
    </div>
</div>



<div className=' w-full flex justify-center mt-1'>
    <div className=' w-11/12   mt-1 flex justify-between'>
    <div className=' w-[100%] my-1'>
    <label htmlFor="textarea" className=' block'>Your Message</label>
    <textarea name="" placeholder='Enter message' id="textarea" className=' border-2 w-full p-3 rounded-md' rows={7}></textarea>
    </div>
   
    </div>
</div>


<div className=' w-full flex justify-center mt-1'>
    <div className=' w-11/12   mt-1 flex justify-between'>
    <div className=' w-[100%] my-1'>
    <button className=' bg-green-600 p-2 text-white rounded-md'>Send a Message</button>
    </div>
   
    </div>
</div>



</div>

<div className=' w-full lg:w-4/12 bg-zinc-400 flex flex-col justify-around text-white my-8 lg:my-0 py-4 lg:py-0'>
<div className=' flex items-center justify-center flex-col '>
    <div className=' w-[30px] h-[30px] bg-green-600 flex justify-center items-center rounded-full'>

<FaPhoneAlt  className='   rounded-full '/>
    </div>
<div className=' my-3'>Call us Now</div>
<div>+92 300 8930442
</div>
</div>
<div className=' flex items-center justify-center flex-col'>
    <div className=' w-[30px] h-[30px] bg-green-600 flex justify-center items-center rounded-full'>

<MdEmail  className=' bg-green-600'/>
    </div>
<div className=' my-3'>Email</div>
<div>contact@madeinpakistan.pk
</div>
</div>
<div className=' flex items-center justify-center flex-col'>
    <div className=' w-[30px] h-[30px] bg-green-600 flex justify-center items-center rounded-full'>

<IoIosSend className='' />
    </div>
<div className=' my-3'>Our Address</div>
<div className=' text-[15px] px-2'>Office # 19, 2nd Floor, United Trade Center, Gulshan-e-Iqbal Block 6, Karachi 75300</div>
</div>
</div>
</div>
</div>

<div className='  flex justify-center mb-16 lg:mb-24 lg:mt-24'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.254668623295!2d67.09025327436703!3d24.9233928427383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3393a9d79b98b%3A0xd43935dc880dd9f4!2sDigitech%20Infra%20Associates!5e0!3m2!1sen!2s!4v1721636396248!5m2!1sen!2s" className=' w-11/12 h-[400px] '  allowFullscreen="" loading='lazy' referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>

<Subscribed />

<Footer />

    </div>

  )
}

export default Contactus