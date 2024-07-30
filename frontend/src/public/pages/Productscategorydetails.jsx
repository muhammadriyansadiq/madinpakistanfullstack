import React from 'react'
import Navbar from '../components/Navbar'
import "../../App.css"
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { Slider, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Slidermodals from '../components/Slidermodals';
import { settab1 } from '../../redux/Counterslice';
 
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Footer from '../components/Footer';
import Slidertwo from '../components/Slidertwo';
import Relateditemsslider from '../components/Relateditemsslider';
const Productscategorydetails = () => {
  const [value, setValue] = useState([0,3999]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilter = () => {
    console.log("Filter applied with range:", value);
  };
  const data = [
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper & sciccor",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"},
    {img:"https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg",productname:"Pencil & Paper",price:"Rs.320"}
  ]
const dispatch = useDispatch()
const tab = useSelector((state) => state.counter.tab1)

  console.log("tab",tab)

 
  return (
    <div>
        <Navbar />
        <div className=' w-full flex justify-center bg-zinc-300 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>Shop Details</button>
        </div>
        
    </div>

    <div className=' w-full flex justify-center my-16'>
      <div className=' w-11/12 flex justify-between'>
      <div className='  w-full flex justify-between  h-full lg:h-[80vh] flex-col lg:flex-row lg:justify-around'>
          <div className='w-[88%] lg:w-[48%] order-2 lg:order-1 mt-5 lg:mt-0'>
            <Slidermodals />
          </div>
          <div className='w-[88%] border-[2px] pl-2 py-3 lg:py-0 lg:mt-0 lg:w-[45%] flex flex-col justify-around mt-4 order-1 lg:order-2 text-[22px] font-serif '>
            <div>Linear Roller Colour Pen - 6Pcs
            </div>
            <div className=' mt-3'>rating</div>
            <div className=' my-3'>Rs.699
            </div>
            <div>SKU: BM059</div>
            <div className=' flex items-center mt-3'>
              <div className=' flex text-[14px] items-center'>
                <button className=' bg-green-600 h-[30px] w-[30px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< IoIosAddCircleOutline/></button>
                <div className=' mx-2'>1</div>
                <button className=' bg-green-600 h-[30px] w-[30px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< GrSubtractCircle/></button>
              </div>
              <div className=' mx-2 text-[14px]'><button className=' bg-green-600 p-1 rounded-lg text-white cursor-pointer'>Add To Cart</button></div>
              <div className=' text-[22px]'><FaRegHeart /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=' flex justify-center w-full my-4'>
      <div className=' w-[89%] '>
<div>
  <button className=' bg-green-600 p-2 text-white rounded-lg hover:bg-green-500'>Description</button>
  <button className=' bg-green-600 p-2 text-white ml-3 rounded-lg hover:bg-green-500'>Reviews</button>
</div>
      </div>
    </div>


    <div className=' flex justify-center w-full my-4'>
      <div className=' w-[89%] '>
<div>
This set of 6 fine liner pens is perfect for art and craft work. Each pen has a unique design and colour, making them great for adding a pop of colour to your projects. The roller design allows for smooth and precise lines, while the variety of shapes and sizes make them versatile for different types of art. With express delivery available in Karachi, you can start creating in no time.
</div>
      </div>
    </div>


    <div className=' flex flex-col items-center mt-16 mb-6'>
<div className=' text-[26px] font-bold'>
  Related Items
</div>
<div className=' h-[2px] w-[72px] bg-green-600'> 
</div>
    </div>
   
<div className=' mb-[190px] ml-4  w-[91%] lg:ml-[66px]'>

   <Relateditemsslider />
</div>




   <Footer />
    </div>


  )
}

export default Productscategorydetails