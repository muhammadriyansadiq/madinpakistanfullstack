import React from 'react'
import { IoSendOutline } from "react-icons/io5";

const Fourcarts = () => {
  return (

    <>
<div className=" bg-gray-300 flex justify-center py-4 lg:py-14 my-10 lg:my-24">
  <div className=" w-full lg:w-11/12 flex justify-between flex-col lg:flex-row">
<div className=' w-full flex justify-between'>
<div className=" w-full flex justify-center items-center">
  <div>< IoSendOutline /></div>
  <div className=" pl-2 ">
    <div className=" font-bold">Free Shipping</div>
    <div>order over Rs.2000</div>
  </div>
</div>
<div className="w-full flex justify-center items-center my-4 lg:my-0">
  <div>< IoSendOutline /></div>
  <div className=" pl-2 ">
    <div className=" font-bold">Free Shipping</div>
    <div>order over Rs.2000</div>
  </div>
</div>
</div>
<div className=' w-full flex justify-between'>


<div className="w-full flex justify-center items-center">
  <div>< IoSendOutline /></div>
  <div className=" pl-2 ">
    <div className=" font-bold">Free Shipping</div>
    <div>order over Rs.2000</div>
  </div>
</div>
<div className="w-full flex justify-center items-center mt-4 lg:mt-0">
  <div>< IoSendOutline /></div>
  <div className=" pl-2 ">
    <div className=" font-bold">Free Shipping</div>
    <div>order over Rs.2000</div>
  </div>
</div>
</div>
  </div>
</div>
    </>

  )
}

export default Fourcarts