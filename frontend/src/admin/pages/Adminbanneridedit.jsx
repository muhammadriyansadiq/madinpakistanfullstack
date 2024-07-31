
import React, { useState, useEffect } from 'react';
import "../../App.css";
import { useSelector, useDispatch } from 'react-redux';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';
import axios from "axios";
import { useParams } from 'react-router-dom'; // to get ID from URL parameters

axios.defaults.withCredentials = true;

const Adminbanneridedit = () => {
  const { id } = useParams(); // Get the banner ID from URL parameters
  const dispatch = useDispatch();
  const [getbannerdata,setgetbannerdata] = useState([])
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    bannerImage: null,
    status: 'Active',
  });

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/banner`);
// setgetbannerdata(response.data.data)
      response.data.data.forEach((data,ind)=>{
        if(data._id === id){
setFormData({
        title: data.title,
        description: data.description,
        bannerImage: data.bannerImage, // Assuming photo URL or identifier
        status: data.status,
      });
          console.log("filtereddata",data)
        }
      })
      
    } catch (error) {
      console.error('Error fetching banner data:', error);
    }
  };

  useEffect(() => {
    // Fetch existing banner data for editing
  
    fetchBanner();
  }, []);

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
      bannerImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('bannerImage', formData.bannerImage);
    formDataToSend.append('status', formData.status);

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/banner/${id}`,formDataToSend);

      console.log('Banner updated successfully:', response);
      // Handle success, e.g., notify user or navigate away
      fetchBanner();
      setloading(false)
    } catch (error) {
      console.error('Error updating banner:', error);
      // Handle error, e.g., notify user
      setloading(false)
    }
  };

  console.log("initial data",formData)

  return (
    <div className="flex w-full ">
      {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
      <div className={`relative homeright right min-h-screen xs: ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}>
        <AdminNavbar />
        <div className='bg-[#f6f8fb]'>
          <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
            <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
              <div className='flex justify-between p-5 border-b-[1px]'>
                <div className='font-sans font-medium text-gray-700 text-[21px]'>Edit Banner</div>
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

                    <img src={formData.bannerImage} className=' h-[70px] w-[70px] mt-4 rounded-full' alt="" />
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
                      type="submit"
                      className='ml-0 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                    >
                     {loading?"loading...": "Edit"}
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

export default Adminbanneridedit;
