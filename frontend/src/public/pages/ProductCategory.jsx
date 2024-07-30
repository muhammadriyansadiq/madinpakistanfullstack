import React from 'react'
import Navbar from '../components/Navbar'
import "../../App.css"
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { Slider, Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { settab1 } from '../../redux/Counterslice';
const ProductCategory = () => {
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
  function tab1(){
dispatch(settab1(true))
  }

  function tab2(){
    dispatch(settab1(false))
      }
  console.log("tab",tab)

 
  return (
    <div>
        <Navbar />
        <div className=' w-full flex justify-center bg-zinc-300 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>Shop Grid</button>
        </div>
        
    </div>


    <div className=' w-full flex justify-center   my-16'>
        <div className=' w-11/12 flex justify-between flex-col lg:flex-row'>
        <div className=' left w-full lg:w-3/12 min-h-screen order-2 lg:order-1'>

        
<div className=' w-full bg-slate-100   py-4 h-full'>
<div className=' text-center'>Categories</div>
<div className=' w-11/12 h-[2px] bg-gray-300 mt-4 ml-auto mr-auto' ></div>
<div className=' w-11/12 ml-auto mr-auto mt-4'>

<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
<div>Automobile</div>
</div>

</div>


<div className=' w-full bg-slate-100   py-4 mt-8 '>
<div className=' text-center text-[14px] lg:text-[18px] font-semibold'>Shop By Price</div>
<div className=' w-11/12 h-[2px] bg-gray-300 mt-4 ml-auto mr-auto' ></div>
<div className=' w-11/12 ml-auto mr-auto mt-4'>


<Box sx={{  padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
     
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={3999}
        sx={{
          color: 'green',
          '& .MuiSlider-thumb': {
            borderRadius: '50%',
          },
          '& .MuiSlider-rail': {
            height: 2,
            backgroundColor: '#000',
          }
        }}
      />
      <button
        variant="contained"
        color="warning"
        onClick={handleFilter}
        sx={{ mt: 2 }}
        className=' bg-green-600 p-1 rounded-lg text-white cursor-pointer'
      >
        Filter
      </button>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Range: {value[0]} - {value[1]}
      </Typography>
    </Box>
</div>

</div>



<div className=' w-full bg-slate-100   py-4 mt-8 '>
<div className=' text-center text-[14px] lg:text-[18px] font-semibold'>Recent Products</div>
<div className=' w-11/12 h-[2px] bg-gray-300 mt-4 ml-auto mr-auto' ></div>

<div className=' flex justify-between my-5 px-4'>
  <div><img src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" className=' rounded-full h-[60px] w-[60px]' alt="" /></div>
  <div className=' w-8/12'>
    <div>Permanent Colour Pencils - 12 Pcs
    </div>
    <div>RS.320</div>
  </div>
</div>

</div>

</div>




<div className=' w-full lg:w-8/12 order-1 lg:order-2'>
<div className=' bg-slate-200 flex justify-between px-2 py-6 mb-3'>
<div className=' flex'>
  <div className=' flex'>
   <div>

    Show
   </div>
   <div className=' mx-3'>
    <select name="" id="">
    <option value="default">Default</option>
    <option value="default">09</option>
    <option value="default">15</option>
    <option value="default">21</option>
    <option value="default">30</option>

    </select>
   </div>
    </div>
  <div className=' flex'>
    <div>

    Sort By
    </div>
    <div className=' mx-3'>
    <select name="" id="">
    <option value="default">Default</option>
    <option value="default">Name</option>
    <option value="default">Price</option>
    <option value="default">Category</option>
    <option value="default">Brand</option>

    </select>
   </div>
    </div>
</div>
<div className=' flex'>
<div className='cursor-pointer' onClick={tab1}>tab1</div>
<div className=' ml-2 cursor-pointer' onClick={tab2}>tab2</div>
</div>  
</div>
<div className=' w-full  flex justify-between flex-wrap'>
{tab?
<>
{data.map((items,ind)=>(
  <div key={ind} className="productcard border-[2px] w-full lg:w-[30%] mb-5 relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src={items.img} alt="image" />
  <div className="cardanimaproduct  ">
    <div><button className=' text-[14px]'>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 text-[14px]">
  {items.productname}
  </div>
<div>{items.price}</div>
</div>
))}
</>:
<>
{data.map((items,ind)=>(
  <div key={ind} className="productcard border-[2px] w-full lg:w-[40%] mb-5 relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src={items.img} alt="image" />
  <div className="cardanimaproduct  ">
    <div><button className=' text-[14px]'>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 text-[14px]">
  {items.productname}
  </div>
<div>{items.price}</div>
</div>
))}
</>
}



</div>
</div>

        </div>
        
    </div>
    </div>


  )
}

export default ProductCategory