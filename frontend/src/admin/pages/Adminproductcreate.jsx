import React, { useEffect, useState } from "react";
// import Navbar from './Navbar';
import { Link } from "react-router-dom";
import "../../App.css";

import { useSelector } from "react-redux";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from "./Copyright";
import axios from "axios";
axios.defaults.withCredentials = true;

const Adminproductcreate = () => {
const [category ,setcategoriesdata] = useState([])
const [brand ,setbranddata] = useState([])
const [sizeselect,setsizeselect] = useState([])
let f = []
useEffect( ()=>{
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/category`);
      setcategoriesdata(response.data.data);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  fetchCategories();
  const fetchBrand = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/brand`);
      // setcategoriesdata(response.data.data);
      console.log("response",response.data.data)
      setbranddata(response.data.data)
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  fetchBrand();
 
},[])

function sizefunction(e){

e.preventDefault()
console.log(e.target.value)

// f.push(e.target.value)

// setsizeselect(f)

// console.log("sizeselect",sizeselect,"f",f)
}


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

        <div className=" bg-[#f6f8fb] ">
          <div className="w-full mt-9 flex justify-center  allorders bg-[#f6f8fb]">
            <div className="w-full mt-2 border-[2px] rounded-md mb-8 bg-white">
              <div className="flex justify-between p-5 border-b-[1px] ">
                <div className="font-sans font-medium text-gray-700 text-[21px]">
                  Add Product
                </div>
              </div>
              <form action="">
                <div className="p-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Title{" "}
                    </label>
                    <input
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Name"
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="description" className=" text-[15px]">
                      Summary
                    </label>
                    <textarea
                      rows={1}
                      id="description"
                      type="search"
                      className=" px-1 mt-2  leading-9 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="description" className=" text-[15px]">
                      Description
                    </label>
                    <textarea
                      rows={1}
                      id="description"
                      type="search"
                      className=" px-1 mt-2  leading-9 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <p>Is Featured</p>
                  <input
                    type="checkbox"
                    className=""
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1" className=" ">
                    {" "}
                    Yes
                  </label>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="select" className=" text-[15px]">
                      Category
                    </label>
                    <select
                      name="cars"
                      id="select"
                      className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                    >
                      <option value="volvo">---select any category---</option>
                     {category.map((data,ind)=>(
                      <>                      
                      <option key={ind}>{data.title}</option>
                      </>
))}
                    </select>
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Price{" "}
                    </label>
                    <input
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Price"
                    />
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Discount %{" "}
                    </label>
                    <input
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter Discount"
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="select" className=" text-[15px]">
                      Size
                    </label>
                    <select
                      name="cars"
                      id="select"
                      className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"                    
                      onChange={sizefunction}
                    >

                      <option selected disabled > 
---------   select    --------
                        </option>
                      <option value="small">
                                 small       
                      </option>
                      <option value="medium">
                               medium      
                      </option>
                      <option value="large">
                            large         
                      </option>

                    </select>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="select" className=" text-[15px]">
                      Brand
                    </label>
                    <select
                      name="cars"
                      id="select"
                      className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                    >
                      <option value="volvo">---select brand---</option>
                      {brand.map((data,ind)=>(
                        <>
                         <option value="volvo">
                          {data.title}
                         </option>

                        </>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="select" className=" text-[15px]">
                      Condition
                    </label>
                    <select
                      name="cars"
                      id="select"
                      className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                    >
                      <option value="volvo">---select condition---</option>
                      <option value="saab">Default</option>
                      <option value="saab">New</option>
                      <option value="saab">Hot</option>
                    </select>
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div className="">
                    <label for="title" className=" text-[15px]">
                      Quantity{" "}
                    </label>
                    <input
                      id="title"
                      type="search"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
                      placeholder=" Enter quantity"
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="file" className=" text-[15px]">
                      Photo
                    </label>
                    <input
                      id="file"
                      type="file"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="file" className=" text-[15px]">
                      Add More Images
                    </label>
                    <input
                      id="file"
                      type="file"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="file" className=" text-[15px]">
                      Add Video
                    </label>
                    <input
                      id="file"
                      type="file"
                      className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                      placeholder=" "
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full ">
                  <div>
                    <label for="select" className=" text-[15px]">
                      Status
                    </label>
                    <select
                      name="cars"
                      id="select"
                      className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
                    >
                      <option value="volvo">Active</option>
                      <option value="saab">InActive</option>
                    </select>
                  </div>
                </div>

                <div className="p-5  w-full ">
                  <div className="">
                    <button className=" bg-green-500 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
                      Reset
                    </button>

                    <button className=" ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
                      Submit
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

export default Adminproductcreate;
