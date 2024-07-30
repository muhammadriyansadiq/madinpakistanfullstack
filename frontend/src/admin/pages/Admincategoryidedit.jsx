import React, { useState } from 'react';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoIosPrint } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiGreaterThanBold } from "react-icons/pi";
import { useSelector } from 'react-redux';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';

const Admincategoryidedit = () => {
  



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
        } 
        min-w-[400px]: ${
          see ? "w-[83%]" : "w-[100%]"
        }

min-w-[520px]: ${
          see ? "w-[87%]" : "w-[100%]"
        }

        sm: ${
          see ? "w-[90%]" : "w-[100%]"
        }


         md: ${
          see ? "w-[94%]" : "w-[100%]"
        }

        bg-[#f4f5f8] `}
      >
        <AdminNavbar />
       

        <div className=' bg-[#f6f8fb] '>

            



            <div className='w-full mt-9 flex justify-center  allorders bg-[#f6f8fb]'>
                <div className='w-full mt-2 border-[2px] rounded-md mb-8 bg-white'>
                    <div className='flex justify-between p-5 border-b-[1px] '>
                        <div className='font-sans font-medium text-gray-700 text-[21px]'>Edit Category</div>
                       
                    </div>
<form action="">
                    <div className='p-5 w-full'>
                        <div className=''>
                            <label for="title"  className=' text-[15px]'>Title </label>
                            <input   id="title" type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md py-1   w-full' placeholder=' Enter Name' />
                        </div>
                    </div>

                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="description" className=' text-[15px]'>Summary</label>
                            <textarea id="description" type='search' className=' mt-2  leading-7 border-[1px] border-gray-500 rounded-md   w-full' placeholder=' ' />
                        </div>
                    </div>





                    <div className='px-5 pb-5 w-full '>
                    <p>Is Parent</p>
                    <input type="checkbox" className='' id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1" className=' '> Yes</label>
                    </div>


                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="select"  className=' text-[15px]'>ParentCategory</label >
                            <select name="cars" id="select"  className=' mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full'>
  
                            <option value="volvo">Automotive</option>
                            <option value="saab">IT & Services</option>

</select>
                        </div>
                    </div>

                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="file"  className=' text-[15px]'>Photo</label >
                            <input id="file" type='file' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full' placeholder=' ' />
                            <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' mt-4 h-[100px] w-[100px] rounded-lg' alt="logo" />
                        </div>
                    </div>


                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="select"  className=' text-[15px]'>Status</label >
                            <select name="cars" id="select"  className=' mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full'>
  
                            <option value="volvo">Active</option>
                            <option value="saab">InActive</option>

</select>
                        </div>
                    </div>

                    <div className='p-5  w-full '>
                        <div className=' text-left'>
                            <button className=' bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md '>Update</button>
                        </div>
                    </div>
                    </form>

                </div>


            </div>
            </div>
            <Copyright />
      </div>
    </div>
  );
};

export default Admincategoryidedit;
