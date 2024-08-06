import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';  // Import your custom CSS file
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Threecarts from './Threecarts';
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,  // Enable auto-slide
    autoplaySpeed: 6000,  // Slide every 3 seconds
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className=' sliderone h-[350px] lg:h-[700px]' style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
            {/* <img src="https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg" className=' w-full h-[300px] lg:h-[700px]' alt="" /> */}
            <video className=" w-full h-[250px] lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2020/06/23/42963-434316724_large.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[20px] lg:text-[30px] font-bold lg:top-[34%] text-white'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[12px] lg:text-[24px] font-bold text-white'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[12px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>
</div>
        </div>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
          <video className="h-[250px] bg-black w-full lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2023/11/22/190317-887815641_tiny.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[24px] lg:text-[30px] font-bold lg:top-[34%] text-white'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[14px] lg:text-[24px] font-bold text-white'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[15px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>

</div>
        </div>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
          <video className="h-[250px] bg-black w-full lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2023/06/29/169349-841069126_tiny.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[24px] lg:text-[30px] font-bold lg:top-[34%] text-white'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[14px] lg:text-[24px] font-bold text-white'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[15px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>

</div>
        </div>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
          <video className="h-[250px] bg-black w-full lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2019/01/04/20457-309694537_tiny.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[24px] lg:text-[30px] font-bold lg:top-[34%] text-white'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[14px] lg:text-[24px] font-bold text-white'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[15px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>

</div>
        </div>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
           <video className="h-[250px] bg-black w-full lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2022/08/20/128564-741747704_tiny.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[24px] lg:text-[30px] font-bold lg:top-[34%] text-white'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[14px] lg:text-[24px] font-bold text-white'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[15px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>

</div>
        </div>
        <div className='h-[300px] lg:h-[700px] relative'>
          <h3 className=' '>
          <video className="h-[250px] bg-black w-full lg:h-full" id="whatmore-video"  preload="metadata" loop playsInline autoPlay muted src="https://cdn.pixabay.com/video/2019/10/01/27444-363961136_tiny.mp4" 
  ></video>
          </h3>
          <div className=' absolute top-[14%] left-[10%] text-[24px] lg:text-[30px] font-bold lg:top-[34%]'>New arrivals Alert</div>

          <div className=' absolute top-[29%] lg:top-[45%]  left-[10%] text-[14px] lg:text-[24px] font-bold'>Fresh Styles for Every Season. Discover the Latest Trends Today!

</div>

<div className=' absolute top-[50%] lg:top-[55%] text-green-600 left-[10%] text-[15px] lg:text-[24px] font-bold'><button className=' bg-green-600 p-2 rounded-lg text-white'>Shop Now</button>

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
        <FaArrowRight style={{ color: 'white', fontSize: '29px' }} />
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
        <FaArrowLeft style={{ color: 'white', fontSize: '29px' }} />
      </div>
    );
  }


export default SimpleSlider;
