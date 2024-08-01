import React, { useState } from 'react';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";

import { useSelector } from 'react-redux';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
import { Spin } from 'antd';
axios.defaults.withCredentials = true;
const Adminposttagcreate = () => {
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);
  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    status: 'Active',
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/tag`, formData);
      console.log('Brand created successfully:', response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error creating brand:', error);
      console.error('Error response:', error.response);
      setLoading(false);
    }
    
  };
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
                        <div className='font-sans font-medium text-gray-700 text-[21px]'>Add Post Tag</div>
                       
                    </div>
<form action="" onSubmit={handleSubmit}>
                    <div className='p-5 w-full'>
                        <div className=''>
                            <label for="title"  className=' text-[15px]'>Type </label>
                            <input  
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}

                            id="title" type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full' placeholder=' Enter Name' />
                        </div>
                    </div>








                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="select"  className=' text-[15px]'>Status</label >
                            <select
                              onChange={(e) => setFormData({ ...formData, status: e.target.value })}

                            name="cars" id="select"  className='px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full'>
  
                            <option value="active">Active</option>
                            <option value="Inactive">InActive</option>

</select>
                        </div>
                    </div>




                    <div className='p-5  w-full '>
                        <div className=''>
                        <button type="button" onClick={() => setFormData({ title: '', status: 'Active' })}
                      className='bg-white py-2 border-[2px] font-semibold border-green-700 hover:bg-green-700 hover:text-white px-5 text-green-700 rounded-md'>
                      Reset
                    </button>
                    <button type='submit'
                      className='ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'>
                      {loading ?"Loading..." : "Submit"}
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

export default Adminposttagcreate;
