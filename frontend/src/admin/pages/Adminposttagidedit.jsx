import React, { useState } from 'react';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../../App.css";

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios"
import { Spin } from "antd";
import { useParams } from "react-router-dom";
axios.defaults.withCredentials = true;
const Adminposttagidedit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    status: 'Active',
  });

  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/tag`);
      const bannerData = response.data.data.find((data) => data._id === id);
      if (bannerData) {
        setFormData({
          title: bannerData.title,
          status: bannerData.status,
        });
      }
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  console.log("formdata",formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/tag/${id}`, formData);
      console.log('Banner updated successfully:', response);
      // Handle success, e.g., notify user or navigate away
      await fetchBanner();
    } catch (error) {
      console.error('Error updating banner:', error);
      // Handle error, e.g., notify user
    } finally {
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
<form action=""  onSubmit={handleSubmit}>
                    <div className='p-5 w-full'>
                        <div className=''>
                            <label 
                            
                            for="title"  className=' text-[15px]'>Type </label>
                            <input
                                                  value={formData.title}
                                                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            id="title" type='search' className=' mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full' placeholder=' Enter Name' />
                        </div>
                    </div>








                    <div className='px-5 pb-5 w-full '>
                        <div>
                            <label for="select"  className=' text-[15px]'>Status</label >
                            <select
                                                  value={formData.status}
                                                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            name="cars" id="select"  className='px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full'>
  
                            <option value="volvo">Active</option>
                            <option value="saab">InActive</option>

</select>
                        </div>
                    </div>




                    <div className='p-5  w-full '>
                        <div className=''>

                            <button type='submit' className=' bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md '>
                              {loading?"loading...":"update"}
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

export default Adminposttagidedit;
