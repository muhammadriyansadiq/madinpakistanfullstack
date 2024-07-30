import React, { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import Copyright from "../../admin/pages/Copyright";
import Userdashboardcomponent from "../components/Userdashboardcomponent";
import Userdashboardnavbar from "../components/Userdashboardnavbar";

const Dashboard = () => {

  console.log("inner width", window.outerWidth);
const dispatched = useDispatch()
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);


  const data = [
    // Add your data here
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" },
    { col1: '0', col2: 'New product', col3: 'New arrival alert', col4: '1 month ago', col5: 'Active',col6:"opop",col7:"ok" }, 
  ];

const [currentPage, setCurrentPage] = useState(1);
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


  return (
    <div className="flex w-full ">
      {see ? (
        <Userdashboardcomponent
          collapsed={collapsed}
        />
      ) : (
        ""
      )}
      <div
        className={`relative homeright right min-h-screen  xs: ${
          see ? "w-[78%]" : "w-[100%]"
        }  lg:w-full  bg-[#f4f5f8] `}
      >
        <Userdashboardnavbar />
       
        <div className='w-full flex justify-center mt-9 allorders border-[2px]'>
                <div className='w-full   py-4 flex justify-center'>
                 <div className=" w-[98%] text-[30px] font-bold">
Profile
                 </div>

                </div>
            </div>


<div className=" full flex justify-center my-7">
<div className=" w-[98%]  flex justify-between flex-col lg:flex-row">
<div className=" w-[99%] lg:w-[32%] rounded-lg shadow-lg bg-white flex justify-center items-center flex-col p-2 ">
    <div className=" rounded-full bg-black  h-[220px] w-[220px]">
        <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className="w-full h-full" alt="" />
    </div>
    <div className="  my-2">MuhammadRiyansadiq</div>

    <div className=" text-blue-400 underline">MuhammadRiyansadiq77@gmail.com</div>
    <div>
        Role: User
    </div>
</div>
<div className=" w-[99%] lg:w-[62%] mt-6 bg-white rounded-lg shadow-lg py-1 lg:mt-0">
    <form action="">
        <div className=" pl-8">

        <label htmlFor="name" className="cursor-pointer">Name</label><br />
        <input type="text" id="name" className="pl-3 border-[1px] w-11/12 py-3 rounded-lg" />
        </div>
        <div className=" pl-8 mt-6">

<label htmlFor="email" className="cursor-pointer">Email</label><br />
<input type="email" id="email" className="pl-3 border-[1px] w-11/12 py-3 rounded-lg" />
</div>

<div className=" pl-8 mt-6">

<label htmlFor="file" className="cursor-pointer">Photo</label><br />
<input type="file" id="file" className="pl-3 border-[1px] w-11/12 py-3 rounded-lg" />
</div>

<div className=" my-6 flex justify-center">
    <button className="bg-green-600 text-white rounded-lg py-3 w-3/12">Update</button>
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

export default Dashboard;
