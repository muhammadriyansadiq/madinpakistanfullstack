import React from 'react'
import Navbar from '../components/Navbar'
import Fourcarts from '../components/Fourcarts'
import Subscribed from '../components/Subscribed'
import Footer from '../components/Footer'
const Aboutus = () => {
  return (
<>
<Navbar />
    <div className=' w-full flex justify-center bg-zinc-300 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>About Us</button>
        </div>
        
    </div>

    <div className=' w-full flex justify-center mt-16 mb-32 lg:mt-24 lg:mb-0'>
        <div className=' w-11/12 flex justify-between flex-col lg:flex-row '>
<div className=' w-full lg:w-5/12  h-[60vh] order-2 mt-16 lg:mt-0 lg:order-1' >
<div className=' text-[22px]'>Welcome To Made In Pakistan</div>
<div className=' text-[16px] my-5'>
Your premier destination for affordable and high-quality shopping. At Bachat Mart, we believe in providing an unparalleled online shopping experience, offering a diverse range of products from electronics to fashion, home essentials to beauty products, all under one virtual roof. Our mission is to bring you the best deals and discounts without compromising on quality, ensuring that every purchase you make is a smart saving. We pride ourselves on our user-friendly platform, secure payment options, and exceptional customer service, making shopping not just convenient, but also a pleasure. Join us at Bachat Mart, where savings meet satisfaction!
</div>
<div>
    <button className=' bg-green-600 p-1 text-white rounded-md cursor-pointer'>Contact Us</button>
</div>
</div>
<div className=' w-full lg:w-5/12 relative order-1  h-[55vh] border-x-2 lg:order-2'>
<div className='leftandright w-full  h-full absolute top-[-40px]'>

<img className='w-full h-full  bg-transparent' src="https://bachatmart.pk/public/mini-banners/image%2012.png" alt="" />
</div>
</div>
        </div>
    </div>

    <Fourcarts />

    <Subscribed />

    <Footer />
    </>
  )
}

export default Aboutus