import React, { useState,useEffect } from 'react';
// import Navbar from './Navbar';
import "../../App.css";

import { useSelector,useDispatch } from 'react-redux';
import { setcollapsed } from '../../redux/Counterslice';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';

const Adminbannercreate = () => {
 
  const dispatched = useDispatch()
 
  // useEffect(()=>{
  //   dispatched(setcollapsed(false))
  //   },[])


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
       

        <div className=' bg-[#f6f8fb] '>

            



            <div className='w-full mt-9 flex justify-center  allorders bg-[#f6f8fb]'>
                <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
                    <div className='flex justify-between p-5 border-b-[1px] '>
                        <div className='font-sans font-medium text-gray-700 text-[21px]'>Add Banner</div>
                       
                    </div>
<form action="">
                    <div className='p-5 w-full'>
                        <div className=''>
                            <label for="title"  className=' text-[15px]'>Title </label>
                            <input   id="title" type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full' placeholder=' Enter Name' />
                        </div>
                    </div>

                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="description" className=' text-[15px]'>Description</label>
                            <input id="description" type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full' placeholder=' ' />
                        </div>
                    </div>


                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="file"  className=' text-[15px]'>Photo</label >
                            <input id="file" type='file' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full' placeholder=' ' />
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
                        <div className=''>
                            <button className=' bg-green-500 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md '>Reset</button>

                            <button className=' ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md '>Submit</button>
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

export default Adminbannercreate;
