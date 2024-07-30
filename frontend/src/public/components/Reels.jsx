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
    <div className='mb-[490px] w-[95%] ml-[8px] slidertwovideo h-[200px] lg:h-[300px] lg:ml-[56px] lg:mt-[130px] lg:mb-0'>
      <Slider {...settings} >

      <div className="containercardvideo   relative cursor-pointer ">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-10/12 border-2 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://whatmore-brand-thumbnail-video-assets.b-cdn.net/krosskulture_60227125502/tn_2b21a01c-980b-407b-830b-660bf5f460bb.mp4" 
  ></video>
  <div className="cardanima  pl-2  w-full lg:w-10/12 border-x-transparent lg:border-x-0">
    <div><button>Add to Carts</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


 <div className="containercardvideo   relative cursor-pointer">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  {/* <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" /> */}
  <video className=" w-full lg:w-10/12 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.shopify.com/s/files/1/0602/2712/5502/files/whatmore_tn_03e7dee0-5784-4034-884e-f6522eead262.mp4?v=1721029084" 
  ></video>
  <div className="cardanima  w-full lg:w-10/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercardvideo   relative cursor-pointer">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  {/* <img className=" w-full lg:w-11/12" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" /> */}
  <video className=" w-full lg:w-10/12 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://whatmore-brand-thumbnail-video-assets.b-cdn.net/krosskulture_60227125502/tn_2b21a01c-980b-407b-830b-660bf5f460bb.mp4" 
  ></video>
  <div className="cardanima  w-full lg:w-10/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className=" mt-2 pl-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercardvideo   relative cursor-pointer">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-10/12 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.shopify.com/s/files/1/0602/2712/5502/files/whatmore_tn_e3414369-f516-4859-8731-a64b15981fe6.mp4?v=1721474876" 
  ></video>
  <div className="cardanima  w-full lg:w-10/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className="pl-2 mt-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>



<div className="containercardvideo   relative cursor-pointer">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-10/12 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://whatmore-brand-thumbnail-video-assets.b-cdn.net/krosskulture_60227125502/tn_2b21a01c-980b-407b-830b-660bf5f460bb.mp4" 
  ></video>
  <div className="cardanima  w-full lg:w-10/12">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
  </div>
  <div className="pl-2 mt-2 hover:text-green-600">Permanent Colour Pencils - 12 Pcs
  </div>
  <div className=' pl-2'>

  Rs.3200
  </div>
</div>


<div className="containercardvideo   relative cursor-pointer">
  <div className="newbadgevideo absolute right-16 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <video className=" w-full lg:w-10/12 rounded-lg" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://whatmore-brand-thumbnail-video-assets.b-cdn.net/krosskulture_60227125502/tn_2b21a01c-980b-407b-830b-660bf5f460bb.mp4" 
  ></video>
  <div className="cardanima  w-full lg:w-10/12 pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600 mr-2 lg:mr-0"/></div>
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


export default Reels;
