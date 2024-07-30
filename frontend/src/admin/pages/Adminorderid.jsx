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
import { MdRemoveRedEye } from "react-icons/md";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Copyright from "./Copyright";

const Adminorderid = () => {
  console.log("inner width", window.outerWidth);

  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  const data = [
    // Add your data here
     { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"active",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" },

  ];

  const exportproduct = () => {
    const doc = new jsPDF();

    // Headers
    const headers = [["Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7", "Column 8"]];

    // Data
    const rows = data.map(item => [item.col1, item.col2, item.col3, item.col4, item.col5, item.col6, item.col7, item.col8]);

    let content = {
      head: headers,
      body: rows
    };

    doc.autoTable(content);

    doc.save("myProductData.pdf");
  }

  return (
    <div className="flex w-full ">
      {see ? (
        <Admindasjboardcomponents collapsed={collapsed} />
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
                <div className='w-full border-t-[2px] rounded-md mb-3'>
                    <div className='flex justify-between p-5 border-b-[1px]'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Order </div>
                       <div  onClick={exportproduct}  className=" font-medium"><button className=" bg-green-700 border-[1px] border-green-700 text-white p-2 rounded-lg hover:bg-white hover:text-green-700">Genarate File</button></div>
                    </div>

                    <div className='flex  justify-between border-b-[2px] mb-3 pb-9 '>
                        <div className="w-full  flex justify-center px-4">
                            <div className="w-full  h-full    border-gray-300 overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="bg-green-700 text-white leading-10 border-gray-500 border-[2px]">
                                            <th className="px-4 py-2 border-[1px] border-gray-400">SN</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Order</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Name</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Email</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Quantity</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Charge</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Total amount</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Status</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[100px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col1}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col2}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col4}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col5}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">
                                                    <div>
                                                        <img src={row.col8} alt="logo" className="object-cover h-[50px] w-full" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col5}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col6}</td>
                                                <td className="py-2 border border-gray-300 text-center">
                                                    <div className='flex justify-around px-2'>
                                                        <Link to={'/admin/order/id/edit'} className="bg-white rounded-lg border-[1px] border-green-500 text-[19px] p-2 text-green-500 hover:bg-green-500 hover:text-white"><MdRemoveRedEye /></Link>
                                                        <Link to={'/orders/id'} className="bg-white rounded-lg border-[1px] border-red-500 text-[19px] p-2 text-red-500 hover:bg-red-500 hover:text-white"><MdDeleteForever /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

                              
<div className=" flex justify-center px-4">
    <div className="w-full  flex flex-col justify-between lg:flex-row">
        <div className=" w-[99%] bg-white rounded-lg py-2 lg:w-[48%] border-[1px]">
            <div className=" text-center underline text-[20px]">OrderInformation</div>
            <div className=" flex justify-between w-11/12 mt-5 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">ordernumber</div>
                <div className=" text-left  w-[40%]">12333</div>
            </div>

            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">orderqty</div>
                <div className=" text-left  w-[40%]">2 </div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">orderdate</div>
                <div className=" text-left  w-[40%]">friday 3 2024 </div>
            </div>

            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">orderstatus</div>
                <div className=" text-left  w-[40%]">New</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">ShippingCharge</div>
                <div className=" text-left  w-[40%]">123</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Coupon</div>
                <div className=" text-left  w-[40%]">234</div>
            </div>

            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Total Amount</div>
                <div className=" text-left  w-[40%]">12345</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Payment Method</div>
                <div className=" text-left  w-[40%]">33</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Payment Status</div>
                <div className=" text-left  w-[40%]">Unpaid</div>
            </div>
        </div>
        <div className=" w-[99%] mt-5 bg-white rounded-lg lg:w-[48%] lg:mt-0 border-[1px]" >
            <div className=" text-center underline text-[20px]">ShippingInformation</div>


            <div className=" flex justify-between w-11/12 mt-5 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Fullname</div>
                <div className=" text-left  w-[40%]">MRiyanSadiq</div>
            </div>

            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Email</div>
                <div className=" text-left  w-[40%] break-words">Muhammadriyansadiq77@gmail.com </div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Phone no.</div>
                <div className=" text-left  w-[40%]">03332456677</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Address</div>
                <div className=" text-left  w-[40%] break-words">house # 1446 , Gulshan e hadeed , Bin Qasim , Karachi</div>
            </div>


          

            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Country</div>
                <div className=" text-left  w-[40%]">PK</div>
            </div>


            <div className=" flex justify-between w-11/12 mt-3 border-b-[1px] ml-auto mr-auto rounded-md">
                <div className="  w-[40%] ml-3">Postalcode</div>
                <div className=" text-left  w-[40%]">75010</div>
            </div>


           
        </div>
     </div>
</div>
<Copyright />
        </div>
    </div>
  );
};

export default Adminorderid;
