import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import "../../App.css";
import Threecarts from "../components/Threecarts";
import SimpleSlider from "../components/Slider";
import Slidertwo from "../components/Slidertwo";
import { IoLockClosedSharp } from "react-icons/io5";
import Footer from "../components/Footer";
import Fourcarts from "../components/Fourcarts";
import Subscribed from "../components/Subscribed";
import Allproductstabs from "../components/Allproductstabs";
import Groceriespets from "../components/Groceriespets";
import Healthbeauty from "../components/Healthbeauty";
import Mensfashion from "../components/Mensfashion";
import Reels from "../components/Reels";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL PRODUCTS");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "ALL PRODUCTS":
        return <Allproductstabs />;
      case "GROCERIES & PETS":
        return <Groceriespets />;
      case "HEALTH & BEAUTY":
        return <Healthbeauty />;
      case "MEN'S FASHION":
        return <Mensfashion />;
      default:
        return null;
    }
  };


  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  return (
    <>
      <Navbar />
      <SimpleSlider />
      <Threecarts />

      <Reels />

      <div className="text-center  flex flex-col justify-center lg:mt-[50px] items-center">
        <div className="font-bold text-[22px]">Trending Items</div>
        <div className="h-[2px] bg-green-700 w-[15%] lg:w-[6%]"></div>
      </div>

      <div className="flex justify-center w-full mt-4 mb-10 lg:mb-16 lg:mt-8">
        <div className="w-11/12 lg:w-8/12 flex justify-around flex-col lg:flex-row">
          <button
            className={`p-1 rounded-lg text-green border-[1px] border-green-600 ${
              activeTab === "ALL PRODUCTS"
                ? "bg-green-700 text-white"
                : "bg-white text-green-600"
            }`}
            onClick={() => setActiveTab("ALL PRODUCTS")}
          >
            ALL PRODUCTS
          </button>
          <button
            className={`p-1 rounded-lg text-green-600 border-[1px] border-green-600 ${
              activeTab === "GROCERIES & PETS"
                ? "bg-green-700 text-white"
                : "bg-white text-green-600"
            } my-2 lg:my-0`}
            onClick={() => setActiveTab("GROCERIES & PETS")}
          >
            GROCERIES & PETS
          </button>
          <button
            className={`p-1 rounded-lg text-green-600 border-[1px] border-green-600 
              ${
              activeTab === "HEALTH & BEAUTY"
                ? "bg-green-700 text-white"
                : "bg-white text-green-600"
            } mb-2 lg:mb-0`}
            onClick={() => setActiveTab("HEALTH & BEAUTY")}
          >
            HEALTH & BEAUTY
          </button>
          <button
            className={`p-1 rounded-lg text-green-600 border-[1px] border-green-600 ${
              activeTab === "MEN'S FASHION"
                ? "bg-green-700 text-white"
                : "bg-white text-green-600"
            }`}
            onClick={() => setActiveTab("MEN'S FASHION")}
          >
            MEN'S FASHION
          </button>
        </div>
      </div>

      {renderContent()}

      <div className="text-center flex flex-col justify-center items-center mt-28">
        <div className="text-[23px] font-bold">Hot Item</div>
        <div className="h-[2px] bg-green-600 w-[70px]"></div>
      </div>

      <div className="mt-4 lg:mt-4 w-11/12 lg:w-full flex justify-center">
        <div className="w-[94%] ml-[19px]">
          <Slidertwo />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[230px] lg:mt-[150px]">
        <div className="text-[23px] font-bold">Latest Items</div>
        <div className="h-[2px] bg-green-600 w-[70px]"></div>
      </div>

      <div className="w-full flex justify-center mt-4 mb-10 lg:mb-24">
        <div className="w-11/12 flex justify-between flex-wrap">
          {/* Example item card */}
          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>

          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>


          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>

          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>

          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>

          <div className="border-[1px] my-4 flex lg:w-[32%] justify-between">
            <div className="cartimg w-9/12 cursor-pointer relative">
              <img
                className="w-full hover:grayscale h-[220px]"
                src="https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg"
                alt=""
              />
              <div className="lock bg-green-600 text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white">
                <IoLockClosedSharp />
              </div>
            </div>
            <div className="w-[45%] flex justify-center items-start flex-col pl-3">
              <div>Permanent Colour Pencils - 12 Pcs</div>
              <div className="mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer">
                Rs.320
              </div>
            </div>
          </div>
          {/* Repeat similar blocks for other items */}
        </div>
      </div>

      <Fourcarts />
      <Subscribed />

      <div className="my-3 lg:my-6">
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder=" Your email address"
            className="border-[1px] w-7/12 lg:w-4/12 py-4 rounded-l-md"
          />
          <button className="bg-green-600 px-6 text-white rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
