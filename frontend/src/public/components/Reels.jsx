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

const Reels = () => {
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
    <div className='mb-[90px] w-[95%] ml-[8px] slidertwovideo h-[200px] lg:h-[300px] lg:ml-[56px] lg:mt-[130px] lg:mb-0'>
      <Slider {...settings} >

      <div className="containercardvideo    relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-11/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://media.istockphoto.com/id/922395328/video/mannequin-stairs.mp4?s=mp4-640x640-is&k=20&c=WqiS1hdo2jscMpZyUDUdz3BKcJHCJxT9BVMOAOeO75Y=" 
  ></video>
  <div className="cardanima  px-2 w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercardvideo   relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-11/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://media.istockphoto.com/id/922395328/video/mannequin-stairs.mp4?s=mp4-640x640-is&k=20&c=WqiS1hdo2jscMpZyUDUdz3BKcJHCJxT9BVMOAOeO75Y=" 
  ></video>
  <div className="cardanima  px-2 w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>

<div className="containercardvideo   relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-11/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://media.istockphoto.com/id/922395328/video/mannequin-stairs.mp4?s=mp4-640x640-is&k=20&c=WqiS1hdo2jscMpZyUDUdz3BKcJHCJxT9BVMOAOeO75Y=" 
  ></video>
  <div className="cardanima  px-2 w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>

<div className="containercardvideo   relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-11/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://media.istockphoto.com/id/922395328/video/mannequin-stairs.mp4?s=mp4-640x640-is&k=20&c=WqiS1hdo2jscMpZyUDUdz3BKcJHCJxT9BVMOAOeO75Y=" 
  ></video>
  <div className="cardanima  px-2 w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>



<div className="containercardvideo   relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-11/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://media.istockphoto.com/id/922395328/video/mannequin-stairs.mp4?s=mp4-640x640-is&k=20&c=WqiS1hdo2jscMpZyUDUdz3BKcJHCJxT9BVMOAOeO75Y=" 
  ></video>
  <div className="cardanima  px-2 w-full lg:w-11/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
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


export default Reels;
