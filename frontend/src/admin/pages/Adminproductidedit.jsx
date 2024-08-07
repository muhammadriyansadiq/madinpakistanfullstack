// import React, { useState,useEffect } from "react";
// // import Navbar from './Navbar';
// import "../../App.css";

// import { useSelector } from "react-redux";
// import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
// import AdminNavbar from "../components/AdminNavbar";
// import axios from "axios";
// axios.defaults.withCredentials = true;
// const Adminproductidedit = () => {
//   const collapsed = useSelector((state) => state.counter.collapsed);
//   const see = useSelector((state) => state.counter.see);
//   const width = useSelector((state) => state.counter.width);
//   const [productdata,setproductdata] = useState("")


  
// useEffect(()=>{

//   async function getproduct(){
//       try{
          
//           const getcategorydata = await axios.get(`${import.meta.env.VITE_API_KEY}/api/product`);
      
//         console.log("datatag",getcategorydata.data.data)
  
//         setproductdata(getcategorydata.data.data)
  
//         }
//         catch(err){
    
//           console.log("error",err)
    
//         }
//   }
  
  
  
//   getproduct()
  
//   },[])


//   console.log("productdata",productdata)
//   return (

//     <div className="flex w-full ">
//       {see ? (
//         <Admindasjboardcomponents
//           collapsed={collapsed}
//         />
//       ) : (
//         ""
//       )}
//       <div
//         className={`relative homeright right min-h-screen  xs: ${
//           see ? "w-[78%]" : "w-[100%]"
//         }  lg:w-full  bg-[#f4f5f8] `}
//       >
//         <AdminNavbar />

//         <div className=" bg-[#f6f8fb] ">
//           <div className="w-full mt-9 flex justify-center  allorders bg-[#f6f8fb]">
//             <div className="w-full mt-2 border-[2px] rounded-md mb-3 bg-white">
//               <div className="flex justify-between p-5 border-b-[1px] ">
//                 <div className="font-sans font-medium text-gray-700 text-[21px]">
//                   Edit Product
//                 </div>
//               </div>
//               <form action="">
//                 <div className="p-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Title
//                     </label>
//                     <input
//                       id="title"
//                       type="search"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Name"
//                       value={productdata[0].title}
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="description" className=" text-[15px]">
//                       Summary
//                     </label>
//                     <textarea
//                     value={productdata[0].summary}
//                       id="description"
//                       type="search"
//                       className=" px-1 mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="description" className=" text-[15px]">
//                       Description
//                     </label>
//                     <textarea
//                       id="description"
//                       type="search"
//                       value={productdata[0].description}
//                       className=" px-1 mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <p>Is Featured</p>
//                   <input
//                     type="checkbox"
//                     className=""
//                     id="vehicle1"
//                     name="vehicle1"
//                     value="Bike"
//                     checked
//                   />
//                   <label for="vehicle1" className=" ">
//                     {" "}
//                     Yes
//                   </label>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="select" className=" text-[15px]">
//                       category
//                     </label>
//                     <select
//                       name="cars"
//                       id="select"
//                       className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                     >
//                       <option value="volvo">---select any category---</option>
//                       <option value="saab">mobile</option>
//                       <option value="saab">Madical</option>
//                       <option value="saab">grocery items</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="p-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Price{" "}
//                     </label>
//                     <input
//                       id="title"
//                       value={productdata[0].price}
//                       type="search"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Price"
//                     />
//                   </div>
//                 </div>

//                 <div className="p-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Discount %{" "}
//                     </label>
//                     <input
//                       id="title"
//                       type="search"
//                       value={` ${productdata[0].discount} %`}
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Discount"
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="select" className=" text-[15px]">
//                       Size
//                     </label>
//                     <select
//                       name="cars"
//                       id="select"
//                       className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                     >
//                       <option value="volvo">---Nothing Selected---</option>
//                     {/* {productdata && productdata[0].size.map((data,ind)=>(

//                       <option value={`${data}`} key={ind}>{data}</option>
                      

//                     ))

//                     } */}
//                     </select>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="select" className=" text-[15px]">
//                       Brand
//                     </label>
//                     <select
//                       name="cars"
//                       id="select"
//                       className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                     >
//                       <option value="volvo">---select brand---</option>
//                       <option value="saab">Gulahmed</option>
//                       <option value="saab">engro</option>
//                       <option value="saab">fauji</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="select" className=" text-[15px]">
//                       Condition
//                     </label>
//                     <select
//                       name="cars"
//                       id="select"
//                       className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                     >
//                       <option value="volvo">---select condition---</option>
//                       <option value="saab">Default</option>
//                       <option value="saab">New</option>
//                       <option value="saab">Hot</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="p-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Quantity{" "}
//                     </label>
//                     <input
//                       id="title"
//                       value={"get from db"}
//                       type="search"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter quantity"
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="file" className=" text-[15px]">
//                       Photo
//                     </label>
//                     <input
//                       id="file"
//                       type="file"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                     <div>
//                     <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' mt-4 h-[100px] w-[100px] rounded-lg' alt="logo" />

//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="file" className=" text-[15px]">
//                       Add More Images
//                     </label>
//                     <input
//                       id="file"
//                       type="file"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                     <div>
//                     <img src="../../../public/IMG-20240712-WA0094-removebg-preview.png" className=' mt-4 h-[100px] w-[100px] rounded-lg' alt="logo" />

//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="file" className=" text-[15px]">
//                       Add Video
//                     </label>
//                     <input
//                       id="file"
//                       type="file"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="select" className=" text-[15px]">
//                       Status
//                     </label>
//                     <select
//                       name="cars"
//                       id="select"
//                       className="px-1 mt-2  py-3 leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                     >
//                       <option value="volvo">Active</option>
//                       <option value="saab">InActive</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="p-5  w-full ">
//                   <div className="">
//                     <button className=" bg-green-500 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
//                       Reset
//                     </button>

//                     <button className=" ml-4 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminproductidedit;

import React, { useState, useEffect } from "react";
import "../../App.css";
import { useSelector } from "react-redux";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
axios.defaults.withCredentials = true;

const Adminproductidedit = () => {
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);
  const [productdata, setproductdata] = useState(null);

  useEffect(() => {
    async function getproduct() {
      try {
        const getcategorydata = await axios.get(`${import.meta.env.VITE_API_KEY}/api/product`);
        console.log("datatag", getcategorydata.data.data);
        setproductdata(getcategorydata.data.data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getproduct();
  }, []);

  console.log("productdata", productdata);

  function handlesubmit(e){
e.preventDefault()
console.log("adminproductidedit")
  }
  return (
    <div className="flex w-full">
      {see ? (
        <Admindasjboardcomponents collapsed={collapsed} />
      ) : (
        ""
      )}
      <div
        className={`relative homeright right min-h-screen xs: ${
          see ? "w-[78%]" : "w-[100%]"
        }  lg:w-full  bg-[#f4f5f8]`}
      >
        <AdminNavbar />
        <div className="bg-[#f6f8fb]">
          <div className="w-full mt-9 flex justify-center allorders bg-[#f6f8fb]">
            <div className="w-full mt-2 border-[2px] rounded-md mb-3 bg-white">
              <div className="flex justify-between p-5 border-b-[1px]">
                <div className="font-sans font-medium text-gray-700 text-[21px]">
                  Edit Product
                </div>
              </div>
              <form action="" encType="">
                <div className="p-5 w-full">
                  <div>
                    <label htmlFor="title" className="text-[15px]">
                      Title
                    </label>
                    <input
                      id="title"
                      type="search"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Name"
                      value={productdata ? productdata[0]?.title : ""}
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="description" className="text-[15px]">
                      Summary
                    </label>
                    <textarea
                      value={productdata ? productdata[0]?.summary : ""}
                      id="description"
                      type="search"
                      className="px-1 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="description" className="text-[15px]">
                      Description
                    </label>
                    <textarea
                      id="description"
                      type="search"
                      value={productdata ? productdata[0]?.description : ""}
                      className="px-1 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <p>Is Featured</p>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    checked={productdata ? productdata[0]?.isFeatured : false}
                  />
                  <label htmlFor="vehicle1"> Yes</label>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="select" className="text-[15px]">
                      Category
                    </label>
                    <select
                      name="category"
                      id="select"
                      className="px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      value={productdata ? productdata[0]?.category : ""}
                    >
                      <option value="">---select any category---</option>
                      <option value="mobile">Mobile</option>
                      <option value="medical">Medical</option>
                      <option value="grocery">Grocery Items</option>
                    </select>
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div>
                    <label htmlFor="price" className="text-[15px]">
                      Price{" "}
                    </label>
                    <input
                      id="price"
                      value={productdata ? productdata[0]?.price : ""}
                      type="search"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Price"
                    />
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div>
                    <label htmlFor="discount" className="text-[15px]">
                      Discount %{" "}
                    </label>
                    <input
                      id="discount"
                      type="search"
                      value={productdata ? `${productdata[0]?.discount} %` : ""}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Discount"
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="selectSize" className="text-[15px]">
                      Size
                    </label>
                    <select
                      name="size"
                      id="selectSize"
                      className="px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      value=""
                    >
                      <option value="">---Nothing Selected---</option>
                      {/* {productdata && productdata[0]?.size.map((data, ind) => (
                        <option value={data} key={ind}>{data}</option>
                      ))} */}
                    </select>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="selectBrand" className="text-[15px]">
                      Brand
                    </label>
                    <select
                      name="brand"
                      id="selectBrand"
                      className="px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      value={productdata ? productdata[0]?.brand : ""}
                    >
                      <option value="">---select brand---</option>
                      <option value="Gulahmed">Gulahmed</option>
                      <option value="Engro">Engro</option>
                      <option value="Fauji">Fauji</option>
                    </select>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="selectCondition" className="text-[15px]">
                      Condition
                    </label>
                    <select
                      name="condition"
                      id="selectCondition"
                      className="px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      value={productdata ? productdata[0]?.condition : ""}
                    >
                      <option value="">---select condition---</option>
                      <option value="default">Default</option>
                      <option value="new">New</option>
                      <option value="hot">Hot</option>
                    </select>
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div>
                    <label htmlFor="quantity" className="text-[15px]">
                      Quantity{" "}
                    </label>
                    <input
                      id="quantity"
                      value={productdata ? productdata[0]?.quantity : ""}
                      type="search"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter quantity"
                    />
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="file" className="text-[15px]">
                      Photo
                    </label>
                    <input
                      id="file"
                      type="file"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=""
                    />
                    <div>
                      <img
                        src={productdata ? productdata[0]?.photo : ""}
                        className="mt-4 h-[100px] w-[100px] bg-black rounded-lg"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="file" className="text-[15px]">
                      Add More Images
                    </label>
                    <input
                      id="file"
                      type="file"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=""
                    />
                    <div>
                      <img
                        src={productdata ? productdata[0]?.photo : ""}
                        className="mt-4 h-[100px] w-[100px] rounded-lg bg-black"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="file" className="text-[15px]">
                      Add Video
                    </label>
                    <input
                      id="file"
                      type="file"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=""
                    />
                  </div>
                  <div className="">
                    <video 
                    className=" h-[220px] w-[220px]"
                        src={productdata ? productdata[0]?.video : ""}
                        
                        ></video>
                  </div>
                </div>

                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="selectStatus" className="text-[15px]">
                      Status
                    </label>
                    <select
                      name="status"
                      id="selectStatus"
                      className="px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      value={productdata ? productdata[0]?.status : ""}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="p-5 w-full">
                  <div>
                 

                    <button onSubmit={handlesubmit} className=" bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md">
                      Edit
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

export default Adminproductidedit;
