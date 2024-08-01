import React, { useState } from 'react';
import "../../App.css";
import { useSelector } from 'react-redux';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';
import axios from "axios";
import { useParams } from 'react-router-dom';

axios.defaults.withCredentials = true;

const Adminshippingcreate = () => {
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const [loading, setLoading] = useState(false);
  // const {id} = useParams()
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    status: 'Active',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/shipping`, formData);
      console.log('Shipping method created successfully:', response.data);
      setFormData({ price: '', type: '', status: 'Active' }); // Reset form fields
    } catch (error) {
      console.error('Error creating shipping method:', error);
      console.error('Error response:', error.response);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div className="flex w-full ">
      {see && (
        <Admindasjboardcomponents collapsed={collapsed} />
      )}
      <div
        className={`relative homeright right min-h-screen ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}
      >
        <AdminNavbar />

        <div className='bg-[#f6f8fb]'>
          <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
            <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
              <div className='flex justify-between p-5 border-b-[1px]'>
                <div className='font-sans font-medium text-gray-700 text-[21px]'>Add Shipping</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className='p-5 w-full'>
                  <label htmlFor="type" className='text-[15px]'>Type</label>
                  <input
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    type='text'
                    className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full'
                    placeholder='Enter Type'
                  />
                </div>

                <div className='pb-5 px-5 w-full'>
                  <label htmlFor="price" className='text-[15px]'>Price</label>
                  <input
                    id="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    type='text'
                    className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full'
                    placeholder='Enter Price'
                  />
                </div>

                <div className='px-5 pb-5 w-full'>
                  <label htmlFor="status" className='text-[15px]'>Status</label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className='px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className='p-5 w-full'>
                  <button
                    type="button"
                    onClick={() => setFormData({ price: '', type: '', status: 'Active' })}
                    className='bg-green-500 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                  >
                    Reset
                  </button>

                  <button
                    type='submit'
                    className='ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
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

export default Adminshippingcreate;
