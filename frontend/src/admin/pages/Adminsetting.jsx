// import React, { useState,useEffect } from "react";
// // import Navbar from './Navbar';
// import { Link } from "react-router-dom";
// import "../../App.css";

// import { useSelector } from "react-redux";
// import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
// import AdminNavbar from "../components/AdminNavbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// axios.defaults.withCredentials = true;

// const Adminsetting = () => {
//   const collapsed = useSelector((state) => state.counter.collapsed);
//   const see = useSelector((state) => state.counter.see);
//   const width = useSelector((state) => state.counter.width);
//   const [loading, setLoading] = useState(false);
//  const [id,setid] = useState("")
//   const [formData, setFormData] = useState({
//     footerText: "",
//     aboutText: "",
//     headerLogo: "",
//     footerLogo:"",
//     address:"",
//        email: "",
//     number:""
//   });

//   const fetchBanner = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_KEY}/api/setting`
//       );
//       const bannerData = response.data.data[0]
//       console.log("bannerData",bannerData)
//       if (bannerData) {
//         setFormData({
//           footerText: bannerData.footerText,
//           aboutText: bannerData.aboutText,
//           headerLogo: bannerData.headerLogo,
//           footerLogo: bannerData.footerLogo,
//           address: bannerData.address,
//           email: bannerData.email,
//           number: bannerData.number,
//         });
//       }
//       setid(bannerData._id)
//     } catch (error) {
//       console.error("Error fetching banner data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBanner();
//   }, []);

//   console.log("formdata", formData,id);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/setting/${id}`, formData);
//       console.log('Banner updated successfully:', response);
//       // Handle success, e.g., notify user or navigate away
//     } catch (error) {
//       console.error('Error updating banner:', error);
//       // Handle error, e.g., notify user
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (

//     <div className="flex w-full ">
//       {see ? (
//         <Admindasjboardcomponents
//           collapsed={collapsed}
//           // toggleCollapsed={toggleCollapsed}
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
//                   Edit Settings
//                 </div>
//               </div>
//               <form  onSubmit={handleSubmit}  encType="multipart/form-data">
//                 <div className="p-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Footer text
//                     </label>
//                     <textarea
//                     rows={1}
//                       id="title"
//                       type="search"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       value={formData.footerText}
//                       onChange={(e) =>
//                         setFormData({ ...formData, footerText: e.target.value })
//                       }
//                       placeholder=" "
//                     />
//                   </div>
//                 </div>


//                 <div className="px-5 pb-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       About us Page text
//                     </label>
//                     <textarea
//                     rows={1}
//                       id="title"
//                       type="search"
//                       value={formData.aboutText}
//                       onChange={(e) =>
//                         setFormData({ ...formData, aboutText: e.target.value })
//                       }
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Name"
//                     />
//                   </div>
//                 </div>

                

             

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="file" className=" text-[15px]">
//                       Header logo
//                     </label>
//                     <input
//                       id="file"
//                       type="file"
//                       onChange={(e) =>
//                         setFormData({ ...formData, headerLogo: e.target.files[0] })
//                       }
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                     />
//                     <div>
                      
//                     <img src={formData.headerLogo} className=' mt-2 h-[100px] w-[100px] rounded-lg' alt="logo" />

//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 w-full ">
//                   <div>
//                     <label for="file" className=" text-[15px]">
//                       Footer logo
//                     </label>
//                     <input
//                       id="file"
//                       type="file"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md   w-full"
//                       placeholder=" "
//                       onChange={(e) =>
//                         setFormData({ ...formData, footerLogo: e.target.files[0] })
//                       }
//                     />
//                     <div>
//                     <img src={formData.footerLogo} className=' mt-2 h-[100px] w-[100px] rounded-lg' alt="logo" />

//                     </div>
//                   </div>
//                 </div>


//                 <div className="px-5 pb-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Address
//                     </label>
//                     <textarea
//                       id="title"
//                       rows={1}
//                       onChange={(e) =>
//                         setFormData({ ...formData, address: e.target.value })
//                       }
//                       value={formData.address}
//                       type="number"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Password"
//                     />
//                   </div>
//                 </div> 



//                 <div className="px-5 pb-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Email
//                     </label>
//                     <input
//                       id="title"
//                       type="email"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Password"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div> 




//                 <div className="px-5 pb-5 w-full">
//                   <div className="">
//                     <label for="title" className=" text-[15px]">
//                       Phone number
//                     </label>
//                     <input
//                       id="title"
//                       type="number"
//                       className=" mt-2  leading-10 border-[1px] border-gray-500 rounded-md px-1   w-full"
//                       placeholder=" Enter Password"
//                       value={formData.number}
//                       onChange={(e) =>
//                         setFormData({ ...formData, number: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div> 


//                 <div className="p-5  w-full ">
//                   <div className="">
                    

//                     <button type="submit" className=" bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md ">
//                       Update
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

// export default Adminsetting;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
axios.defaults.withCredentials = true;

const Adminsetting = () => {
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    footerText: "",
    aboutText: "",
    headerLogo: "",
    footerLogo: "",
    address: "",
    email: "",
    number: ""
  });

  const fetchBanner = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/setting`);
      const bannerData = response.data.data[0];
      if (bannerData) {
        setFormData({
          footerText: bannerData.footerText,
          aboutText: bannerData.aboutText,
          headerLogo: bannerData.headerLogo,
          footerLogo: bannerData.footerLogo,
          address: bannerData.address,
          email: bannerData.email,
          number: bannerData.number
        });
      }
      setId(bannerData._id);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("footerText", formData.footerText);
      formDataToSend.append("aboutText", formData.aboutText);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("number", formData.number);

      if (formData.headerLogo instanceof File) {
        formDataToSend.append("headerLogo", formData.headerLogo);
      }
      if (formData.footerLogo instanceof File) {
        formDataToSend.append("footerLogo", formData.footerLogo);
      }

      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/setting/${id}`, formDataToSend);

      fetchBanner();
setLoading(false)
      console.log('Banner updated successfully:', response);
      // Handle success, e.g., notify user or navigate away
    } catch (error) {
      console.error('Error updating banner:', error);
      setLoading(false);

      // Handle error, e.g., notify user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      {see ? (
        <Admindasjboardcomponents collapsed={collapsed} />
      ) : (
        ""
      )}
      <div className={`relative homeright right min-h-screen ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}>
        <AdminNavbar />
        <div className="bg-[#f6f8fb]">
          <div className="w-full mt-9 flex justify-center allorders bg-[#f6f8fb]">
            <div className="w-full mt-2 border-[2px] rounded-md mb-3 bg-white">
              <div className="flex justify-between p-5 border-b-[1px]">
                <div className="font-sans font-medium text-gray-700 text-[21px]">
                  Edit Settings
                </div>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-5 w-full">
                  <div className="">
                    <label htmlFor="footerText" className="text-[15px]">
                      Footer text
                    </label>
                    <textarea
                      id="footerText"
                      rows={1}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      value={formData.footerText}
                      onChange={(e) => setFormData({ ...formData, footerText: e.target.value })}
                      placeholder=" "
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label htmlFor="aboutText" className="text-[15px]">
                      About us Page text
                    </label>
                    <textarea
                      id="aboutText"
                      rows={1}
                      value={formData.aboutText}
                      onChange={(e) => setFormData({ ...formData, aboutText: e.target.value })}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="headerLogo" className="text-[15px]">
                      Header logo
                    </label>
                    <input
                      id="headerLogo"
                      type="file"
                      onChange={(e) => setFormData({ ...formData, headerLogo: e.target.files[0] })}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=" "
                    />
                    <div>
                      {typeof formData.headerLogo === 'string' ? (
                        <img src={formData.headerLogo} className="mt-2 h-[100px] w-[100px] rounded-lg" alt="logo" />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div>
                    <label htmlFor="footerLogo" className="text-[15px]">
                      Footer logo
                    </label>
                    <input
                      id="footerLogo"
                      type="file"
                      onChange={(e) => setFormData({ ...formData, footerLogo: e.target.files[0] })}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full"
                      placeholder=" "
                    />
                    <div>
                      {typeof formData.footerLogo === 'string' ? (
                        <img src={formData.footerLogo} className="mt-2 h-[100px] w-[100px] rounded-lg" alt="logo" />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label htmlFor="address" className="text-[15px]">
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows={1}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      value={formData.address}
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label htmlFor="email" className="text-[15px]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="px-5 pb-5 w-full">
                  <div className="">
                    <label htmlFor="number" className="text-[15px]">
                      Phone number
                    </label>
                    <input
                      id="number"
                      type="number"
                      className="mt-2 leading-10 border-[1px] border-gray-500 rounded-md px-1 w-full"
                      placeholder="Enter Phone number"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    />
                  </div>
                </div>
                <div className="p-5 w-full">
                  <div className="">
                    <button type="submit" className="bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md">
                      {loading?"loading...":"Update"}
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

export default Adminsetting;
