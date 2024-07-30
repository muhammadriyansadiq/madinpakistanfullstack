import React from 'react'

const Threecarts = () => {
  return (

    <>
   <div className=' flex justify-center mb-16 lg:my-24  lg:mb-0'>
        <div className='w-full lg:w-11/12 flex flex-col lg:flex-row justify-between'>
<div className='bgtwo h-[250px] w-[100%] flex flex-col justify-center lg:w-[32%]'>
   <div className=' text-[18px] lg:text-[30px] font-bold ml-5'>Groceries & pets</div> 
    <div className=' mt-3 w-[130px] p-1 rounded-lg  ml-5 text-[15px] lg:text-[19px] cursor-pointer hover:bg-green-600 hover:text-white'>Discover Now</div>
    <div className=' h-[2px] bg-black w-[80px] lg:w-[120px] mt-1 ml-5'></div>
    </div>
    <div className='bgone h-[250px] lg:w-[32%] w-[100%] flex flex-col justify-center my-4 lg:my-0'>
   <div className=' text-[18px] lg:text-[30px] font-bold ml-5'>Health & Beauty</div> 
   <div className=' mt-3 w-[130px] p-1 rounded-lg  ml-5 text-[15px] lg:text-[19px] cursor-pointer hover:bg-green-600 hover:text-white'>Discover Now</div>
    <div className=' h-[2px] bg-black w-[80px] lg:w-[120px] mt-1 ml-5'></div>
    </div>
    <div className='bgone h-[250px] lg:w-[32%] w-[100%] flex flex-col justify-center'>
   <div className=' text-[18px] lg:text-[30px] font-bold ml-5'>Men's Fashion</div> 
   <div className=' mt-3 w-[130px] p-1 rounded-lg  ml-5 text-[15px] lg:text-[19px] cursor-pointer hover:bg-green-600 hover:text-white'>Discover Now</div>    <div className=' h-[2px] bg-black w-[80px] lg:w-[120px] mt-1 ml-5'></div>
    </div>
</div>
      </div>
    </>
  )
}

export default Threecarts