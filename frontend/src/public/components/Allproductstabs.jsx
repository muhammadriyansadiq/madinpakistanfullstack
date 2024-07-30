import React from 'react'
import Twocards from './Twocards'
import { FaShoppingBag } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import Healthbeauty from './Healthbeauty';
import Mensfashion from './Mensfashion';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";


// import Mensfashion from './Mensfashion';
import Groceriespets from './Groceriespets';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import "../../App.css"
import Slidermodals from './Slidermodals';
const Allproductstabs = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <div className=' allproducts'>
        <div className="flex justify-center w-full  ">
<div className=" w-11/12 flex flex-wrap justify-between lg:flex-nowrap">
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex ">


     
    < FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>

      
      <Modal
      className='allproducts '
      style={{
        top: 20,
      }}
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
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
                <button className=' bg-green-600 h-[20px] w-[20px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< IoIosAddCircleOutline/></button>
                <div className=' mx-2'>1</div>
                <button className=' bg-green-600 h-[20px] w-[20px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< GrSubtractCircle/></button>
              </div>
              <div className=' mx-2 text-[14px]'><button className=' bg-green-600 p-1 rounded-lg text-white cursor-pointer'>Add To Cart</button></div>
              <div className=' text-[22px]'><FaRegHeart /></div>
            </div>
          </div>
        </div>
      </Modal>
    < TbJewishStar className="  hover:text-green-600"/>
    </div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.32090</div>
</div>
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer my-4 lg:my-0"> 
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
<div className="containercard border-[2px] mb-4 lg:mb-0  lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
</div>
</div>
<Twocards />
<Groceriespets />
<Healthbeauty />
<Mensfashion />
    </div>

  )
}

export default Allproductstabs