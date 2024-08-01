import React, { useEffect, useState } from "react";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import AdminNavbar from "../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Copyright from "./Copyright";
import axios from "axios"
import { Spin } from "antd";
import { useParams } from "react-router-dom";
axios.defaults.withCredentials = true;




const Adminshipping = () => {
  
  console.log("inner width", window.outerWidth);



  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  // piechart



  const data = [
    // Add your data here
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active"},
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active" },
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active" },
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active" },
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active" },
    { col1: '1', col2: 'cluster prism',col3:"25",col4:"active" }, 
  ];

const [currentPage, setCurrentPage] = useState(1);
const [shippingdata,setshippingdata] =useState([])
const [loading, setloading] = useState(false);
const itemsPerPage = 5;

// Calculate the total number of pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// Get the current items to display based on the current page
const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

async function name(){
  try{
    const getcategorydata = await axios.get(`${import.meta.env.VITE_API_KEY}/api/shipping`);

  console.log("databrand",getcategorydata.data.data)
  setshippingdata(getcategorydata.data.data)
  }
  catch(err){

    console.log("error",err)

  }
}

useEffect(()=>{

  name()

},[])


const handleDeleteItem = async (id) => {
  try {
    setloading(true);
    const response = await axios.delete(`${import.meta.env.VITE_API_KEY}/api/shipping/${id}`);
    console.log("Deleted successfully:", response.data);
    // Refresh the data
    await name();
  } catch (err) {
    console.error("Error deleting item:", err);
    // Optionally, set an error message to notify the user
  } finally {
    setloading(false);
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
       
        <div className='w-full flex justify-center mt-9 allorders'>
                <div className='w-full border-[2px] rounded-md mb-3'>
                    <div className='flex justify-between p-5 border-b-[1px]'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Shipping List</div>
                        <Link to={'/admin/shipping/create'}>
                            <div className='cursor-pointer'>
                                <button className='bg-green-700 border-[1px] text-white p-2 rounded-md hover:bg-white hover:text-green-700 hover:border-green-700'>
                                   <span className=" text-[17px] font-semibold">AddShipping</span> 
                                </button>
                            </div>
                        </Link>
                    </div>

                    <div className='flex p-5 justify-end'>
                        <div>
                            <span>Search: </span>
                            <input type='search' className='border-[1px] border-gray-500 rounded-md p-1 ml-1' />
                        </div>
                    </div>

                    <div className='flex justify-between border-b-[2px] mb-3 pb-3 '>
                        <div className="w-full flex justify-center px-4">
                            <div className="w-full  h-[300px] border-[2px] border-gray-300 overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="bg-green-700 text-white leading-10 border-gray-500 border-[2px]">
                                            <th className="px-4 py-2 border-[1px] border-gray-400">SN</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Title</th>

                                            <th className="px-4 py-2 border-[1px] border-gray-400">Price</th>
                                            
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Status</th>

                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[100px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shippingdata.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300 text-center">{index +1}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.type}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.price}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.status}</td>
                                                <td className=" py-2 border border-gray-300 text-center">
                                                    <div className='flex justify-around'>

                                                    <Link to={`/admin/shipping/${row._id}`} className="bg-white rounded-lg border-[1px] border-green-700 text-[19px] p-2 text-green-700 hover:bg-green-700 hover:text-white"><FaRegEdit /></Link>
                                                        <button 
                                                        onClick={() => handleDeleteItem(row._id)}
                                                        className="bg-white rounded-lg border-[1px] border-red-500 text-[19px] p-2 text-red-500 hover:bg-red-500 hover:text-white">
                                                          {loading?<Spin />:
                                                          <MdDeleteForever />
                                                          }
                                                          </button>
                                                        </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

<div className=' w-full flex justify-center '>
                    <div className='flex w-11/12 justify-between py-5'>
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
</div>  

                </div>
            </div>
      <Copyright />
      </div>
    </div>
  );
};

export default Adminshipping;
