import React, { useState } from "react";
// import Navbar from './Navbar';
import { Link } from "react-router-dom";
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiGreaterThanBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";

const Adminsetting = () => {
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  return (
    <div className="flex w-full ">
      {see ? (
        <Admindasjboardcomponents
          collapsed={collapsed}
          // toggleCollapsed={toggleCollapsed}
        />
      ) : (
        ""
      )}
      <div
        className={`relative homeright right min-h-screen  xs: ${
          see ? "w-[78%]" : "w-[100%]"
        }  lg:w-full  bg-[#f4f5f8] `}
      >
        <AdminNavbar />

        <div className=" bg-[#f6f8fb] ">
          <div className="w-full mt-9 flex justify-center  allorders bg-[#f6f8fb]">
            <div className="w-full mt-2 border-[2px] rounded-md mb-3 bg-white">
              <div className="flex justify-between p-5 border-b-[1px] ">
                <div className="font-sans font-medium text-gray-700 text-[21px]">
                  Edit Settings
                </div>
              </div>
              <form action="">
                <div className="p-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Footer text
                    </label>
                    <textarea
                    rows={1}
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      value={"Shopping Bachat k saath"}
                      placeholder=" "
                    />
                  </div>
                </div>


                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      About us Page text
                    </label>
                    <textarea
                    rows={1}
                      id="title"
                      type="search"
                      value={"Your premier destination for affordable and high-quality shopping. At Bachat Mart, we believe in providing an unparalleled online shopping experience, offering a diverse range of products from electronics to fashion, home essentials to beauty products, all under one virtual roof. Our mission is to bring you the best deals and discounts without compromising on quality, ensuring that every purchase you make is a smart saving. We pride ourselves on our user-friendly platform, secure payment options, and exceptional customer service, making shopping not just convenient, but also a pleasure. Join us at Bachat Mart, where savings meet satisfaction!"}
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Name"
                    />
                  </div>
                </div>

                {/* <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Email
                    </label>
                    <input
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Email"
                    />
                  </div>
                </div>*/}

             

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="file" className=" text-[15px]">
                      Header logo
                    </label>
                    <input
                      id="file"
                      type="file"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                    <div>
                    <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' mt-2 h-[100px] w-[100px] rounded-lg' alt="logo" />

                    </div>
                  </div>
                </div>




                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="file" className=" text-[15px]">
                      Footer logo
                    </label>
                    <input
                      id="file"
                      type="file"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                    <div>
                    <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' mt-2 h-[100px] w-[100px] rounded-lg' alt="logo" />

                    </div>
                  </div>
                </div>


                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Address
                    </label>
                    <textarea
                      id="title"
                      rows={1}
                      value={"Gulshan e hadeed, bin qasim , karachi"}
                      type="number"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Password"
                    />
                  </div>
                </div> 



                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Email
                    </label>
                    <input
                      id="title"
                      type="email"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Password"
                      value={"contact@madeinpakistan.com.pk"}
                    />
                  </div>
                </div> 




                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Phone number
                    </label>
                    <input
                      id="title"
                      type="number"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Password"
                      value={"033198790"}
                    />
                  </div>
                </div> 


                <div className="p-5  w-full ">
                  <div className="">
                    

                    <button className=" bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminsetting;
