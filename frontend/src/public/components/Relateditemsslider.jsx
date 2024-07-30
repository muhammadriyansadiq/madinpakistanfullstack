import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';  // Import your custom CSS file
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Threecarts from './Threecarts';
import { FaShoppingBag } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { Button, Modal } from 'antd';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from 'react';
import Slidermodals from './Slidermodals';
import { FaRegHeart } from "react-icons/fa";
const Relateditemsslider = () => {
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  };

  return (
    <div className='  slidertwo h-[200px] lg:h-[300px] ' style={{ width: '100%' }}>
      <Slider {...settings} >

      <div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  pl-2  w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">
      < FaShoppingBag onClick={showLoading}  className=" mr-2 hover:text-green-600"/>
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
      < TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


 <div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  w-full lg:w-11/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  w-full lg:w-11/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 pl-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  w-full lg:w-11/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className="pl-2 mt-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>



<div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  w-full lg:w-11/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className="pl-2 mt-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercard   relative cursor-pointer">
  <div className="newbadge absolute right-8 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  w-full lg:w-11/12 pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag onClick={showLoading} className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className="pl-2 mt-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>

      </Slider>

    </div>
  );
};



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'transparent', zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowRight style={{ color: 'white', fontSize: '29px',backgroundColor:"green" , borderRadius:"50%"  }} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'transparent', zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowLeft style={{ color: 'white', fontSize: '29px', backgroundColor:"green" , borderRadius:"50%" }} />
      </div>
    );
  }


export default Relateditemsslider;
