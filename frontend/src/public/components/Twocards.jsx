import React from 'react'

const Twocards = () => {
  return (

    <>
    <div className=' flex w-full justify-center my-16 lg:my-8'> 
<div className=' w-11/12 flex justify-between  flex-col  lg:flex-row  '>
        <div className=' w-[100%] relative lg:w-[48%] '>
<img className=' h-[50vh] lg:h-[86vh]' src="https://cdn.pixabay.com/photo/2019/12/08/21/10/potter-4682257_640.jpg" alt="" />
       <div className=' absolute top-[36%] text-[13px] text-orange-300 left-[7%]'>HOME & LIFESTYLE</div>
       <div className=' absolute top-[43%] text-[21px] font-bold text-orange-300 left-[7%]'>FILA NIGHT MAGIC CRYSTAL LAMP
       </div>
       <button className=' absolute top-[65%] lg:top-[52%] bg-green-600 p-1 rounded-lg  text-[19px] font-bold text-white left-[7%] hover:bg-white hover:text-green-600'>Shop Now</button>
        </div>
        <div className=' mt-3 lg:mt-0 w-[100%] lg:w-[48%] relative'>
<img className=' h-[50vh] lg:h-[86vh] w-full' src="https://cdn.pixabay.com/photo/2018/10/10/21/31/shopping-3738411_640.jpg" alt="" />
       <div className=' absolute top-[36%] text-[13px] text-orange-700 left-[7%] font-extrabold'>HOME & LIFESTYLE</div>
       <div className=' absolute top-[43%] text-[21px] font-bold text-orange-700 left-[7%]'>FILA NIGHT MAGIC CRYSTAL LAMP
       </div>
       <button className=' absolute top-[65%] lg:top-[52%] bg-green-600 p-1 rounded-lg  text-[19px] font-bold text-white left-[7%] hover:bg-white hover:text-green-600'>Shop Now</button>
        </div>
        </div>
    </div>
    </>

  )
}

export default Twocards