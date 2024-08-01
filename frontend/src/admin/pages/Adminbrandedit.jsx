import React, { useEffect, useState } from 'react';
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
import axios from "axios";
import { useParams } from 'react-router-dom';

axios.defaults.withCredentials = true;

const Adminbrandedit = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    status: 'Active',
  });

  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/brand`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/brand/${id}`, formData);
      console.log('Banner updated successfully:', response);
      // Handle success, e.g., notify user or navigate away
    } catch (error) {
      console.error('Error updating banner:', error);
      // Handle error, e.g., notify user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      {see ? (
        <Admindasjboardcomponents collapsed={collapsed} />
      ) : null}
      <div className={`relative homeright min-h-screen ${see ? "w-[78%]" : "w-[100%]"} bg-[#f4f5f8]`}>
        <AdminNavbar />
        <div className='bg-[#f6f8fb]'>
          <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
            <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
              <div className='flex justify-between p-5 border-b-[1px]'>
                <div className='font-sans font-medium text-gray-700 text-[21px]'>Edit Banner</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='p-5 w-full'>
                  <div>
                    <label htmlFor="title" className='text-[15px]'>Title</label>
                    <input
                      id="title"
                      name="title"
                      type='text'
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full px-1'
                      placeholder='Enter Name'
                    />
                  </div>
                </div>
                <div className='px-5 pb-5 w-full'>
                  <div>
                    <label htmlFor="status" className='text-[15px]'>Status</label>
                    <select
                      name="status"
                      id="status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className='mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full px-1'
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className='p-5 w-full'>
                  <div className=''>
                    <button type='submit' className='bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'>
                      {loading ? "Loading" : "Edit"}
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

export default Adminbrandedit;
