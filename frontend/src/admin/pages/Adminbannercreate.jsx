

import React, { useState } from 'react';
import "../../App.css";
import { useSelector, useDispatch } from 'react-redux';
import { setcollapsed } from '../../redux/Counterslice';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';
import axios from "axios"
import { Spin } from 'antd';

axios.defaults.withCredentials = true;

const Adminbannercreate = () => {
  const dispatched = useDispatch();
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);
  const [loading,setloading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: null,
    status: 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('bannerImage', formData.photo);
    formDataToSend.append('status', formData.status);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/banner`,
        formDataToSend,
      );
      console.log('Banner created successfully:', response);
      setFormData({ title: '', description: '', photo: null, status: 'Active' })
      setloading(false)

    } catch (error) {
      console.error('Error creating banner:', error);
      setloading(false)
      // Handle error, maybe notify the user
    }
  };

  return (
    <div className="flex w-full ">
      {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
      <div className={`relative homeright right min-h-screen xs: ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}>
        <AdminNavbar />
        <div className='bg-[#f6f8fb]'>
          <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
            <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
              <div className='flex justify-between p-5 border-b-[1px]'>
                <div className='font-sans font-medium text-gray-700 text-[21px]'>Add Banner</div>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='p-5 w-full'>
                  <div>
                    <label htmlFor="title" className='text-[15px]'>Title</label>
                    <input
                      id="title"
                      name="title"
                      type='text'
                      value={formData.title}
                      onChange={handleChange}
                      className=' pl-2 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                      placeholder='Enter Name'
                    />
                  </div>
                </div>
                <div className='px-5 pb-5 w-full'>
                  <div>
                    <label htmlFor="description" className='text-[15px]'>Description</label>
                    <input
                      id="description"
                      name="description"
                      type='text'
                      value={formData.description}
                      onChange={handleChange}
                      className='pl-2 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                      placeholder='Enter Description'
                    />
                  </div>
                </div>
                <div className='px-5 pb-5 w-full'>
                  <div>
                    <label htmlFor="file" className='text-[15px]'>Photo</label>
                    <input
                      id="file"
                      name="photo"
                      type='file'
                      onChange={handleFileChange}
                      className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                    />
                  </div>
                </div>
                <div className='px-5 pb-5 w-full'>
                  <div>
                    <label htmlFor="select" className='text-[15px]'>Status</label>
                    <select
                      id="select"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className=' pl-2 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                    >
                      <option value="Active">Active</option>
                      <option value="InActive">InActive</option>
                    </select>
                  </div>
                </div>
                <div className='p-5 w-full'>
                  <div>
                    <button
                      type="button"
                      onClick={() => setFormData({ title: '', description: '', photo: null, status: 'Active' })}
                      className='bg-green-500 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className='ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                    >
                      
                      {loading?"loading...":"Submit"}
                    </button>
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
