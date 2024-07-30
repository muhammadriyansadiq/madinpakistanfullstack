import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';  // Import your custom CSS file
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Threecarts from './Threecarts';
const Slidermodals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className=' slidermodals h-[300px] lg:h-full bg-black' style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div className='h-[300px] lg:h-[500px] relative'>
          <h3 className=' '>
            <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-full' alt="" />
          </h3>
        </div>
        <div className='h-[300px] lg:h-[500px] relative'>
          <h3 className=' '>
            <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-full' alt="" />
          </h3>
        </div>
        <div className='h-[300px] lg:h-[500px] relative'>
          <h3 className=' '>
            <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-full' alt="" />
          </h3>
        </div>
        <div className='h-[300px] lg:h-[500px] relative'>
          <h3 className=' '>
            <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-full' alt="" />
          </h3>
        </div>
        <div className='h-[300px] lg:h-[500px] relative'>
          <h3 className=' '>
            <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-full' alt="" />
          </h3>
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
        style={{ ...style, display: 'block', background: 'white', zIndex: 1,padding:"12px" }}
        onClick={onClick}
      >
        <FaArrowRight className=' ' style={{ color: 'green', fontSize: '29px' }} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'white', zIndex: 1,padding:"12px" }}
        onClick={onClick}
      >
        <FaArrowLeft style={{ color: 'green', fontSize: '29px' }} />
      </div>
    );
  }


export default Slidermodals;
