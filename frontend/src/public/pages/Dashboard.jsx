// import React, { useEffect, useState } from "react";
// import "../../App.css";
// import { useDispatch, useSelector } from "react-redux";
// import Copyright from "../../admin/pages/Copyright";
// import Userdashboardcomponent from "../components/Userdashboardcomponent";
// import Userdashboardnavbar from "../components/Userdashboardnavbar";
// import axios from "axios";
// // import {user} from "../../utils/AuthProvider"
// axios.defaults.withCredentials = true;
// const Dashboard = () => {
//   console.log("inner width", window.outerWidth);
//   const dispatched = useDispatch();
//   const collapsed = useSelector((state) => state.counter.collapsed);
//   const see = useSelector((state) => state.counter.see);
//   const width = useSelector((state) => state.counter.width);

//   const data = [
//     // Add your data here
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//     {
//       col1: "0",
//       col2: "New product",
//       col3: "New arrival alert",
//       col4: "1 month ago",
//       col5: "Active",
//       col6: "opop",
//       col7: "ok",
//     },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Get the current items to display based on the current page
//   const currentItems = data.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };
//   const [formData, setFormData] = useState({
//     email: "",
//     profilePhoto: "",
//   });
//   const [id, setid] = useState("");
//   //update-profile/:id
//   async function get() {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_KEY}/api/current-user`
//       );
//       console.log("get successful:", response.data.data);
//       let auth = response.data.data;
//       setFormData({
//         name: auth.name,
//         email: auth.email,
//       });
//       setid(auth._id);
     
//     } catch (err) {
//       console.log("err", err);
    
//     }
//   }

//   useEffect(() => {
//     get();
//   }, []);

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       profilePhoto: e.target.files[0],
//     }));
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submit");
//     try {
//       const response = await axios.put(
//         `${import.meta.env.VITE_API_KEY}/api/update-profile/${id}`,
//         formData
//       );
//       console.log("updated successful:", response);
    
//     } catch (err) {
//       console.log("err", err, "profilePhoto");
    
//     }
//   }

//   console.log("formdata", formData);
//   return (
//     <div className="flex w-full ">
//       {see ? <Userdashboardcomponent collapsed={collapsed} /> : ""}
//       <div
//         className={`relative homeright right min-h-screen  xs: ${
//           see ? "w-[78%]" : "w-[100%]"
//         }  lg:w-full  bg-[#f4f5f8] `}
//       >
//         <Userdashboardnavbar />

//         <div className="w-full flex justify-center mt-9 allorders border-[2px]">
//           <div className="w-full   py-4 flex justify-center">
//             <div className=" w-[98%] text-[30px] font-bold">Profile</div>
//           </div>
//         </div>

//         <div className=" full flex justify-center my-7">
//           <div className=" w-[98%]  flex justify-between flex-col lg:flex-row">
//             <div className=" w-[99%] lg:w-[32%] rounded-lg shadow-lg bg-white flex justify-center items-center flex-col p-2 ">
//               <div className=" rounded-full bg-black  h-[220px] w-[220px]">
//                 <img
//                   src="../../../public/IMG-20240712-WA0094-removebg-preview.png"
//                   className="w-full h-full"
//                   alt=""
//                 />
//               </div>
//               <div className="  my-2">MuhammadRiyansadiq</div>

//               <div className=" text-blue-400 underline">{formData.email}</div>
//               <div>Role: User</div>
//             </div>
//             <div className=" w-[99%] lg:w-[62%] mt-6 bg-white rounded-lg shadow-lg py-1 lg:mt-0">
//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className=" pl-8">
//                   <label htmlFor="name" className="cursor-pointer">
//                     Name
//                   </label>
//                   <br />
//                   <input
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     // onChange={handleChange}

//                     value={formData.name}
//                     type="text"
//                     id="name"
//                     className="pl-3 border-[1px] w-11/12 py-3 rounded-lg"
//                   />
//                 </div>
//                 {/* <div className=" pl-8 mt-6">

// <label htmlFor="email" className="cursor-pointer">Email</label><br />
// <input type="email" id="email" className="pl-3 border-[1px] w-11/12 py-3 rounded-lg" />
// </div> */}

//                 <div className=" pl-8 mt-6">
//                   <label htmlFor="file" className="cursor-pointer">
//                     Photo
//                   </label>
//                   <br />
//                   <input
//                     // onChange={(e) =>
//                     //   setFormData({
//                     //     ...formData,
//                     //     profilePhoto: e.target.files[0],
//                     //   })
//                     // }
//                     onChange={handleFileChange}

//                     type="file"
//                     id="file"
//                     className="pl-3 border-[1px] w-11/12 py-3 rounded-lg"
//                   />
//                 </div>

//                 <div className=" my-6 flex justify-center">
//                   <button
//                     type="submit"
//                     className="bg-green-600 text-white rounded-lg py-3 w-3/12"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <Copyright />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import Copyright from "../../admin/pages/Copyright";
import Userdashboardcomponent from "../components/Userdashboardcomponent";
import Userdashboardnavbar from "../components/Userdashboardnavbar";
import axios from "axios";
axios.defaults.withCredentials = true;

const Dashboard = () => {
  console.log("inner width", window.outerWidth);
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);

 const [loading,setloading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profilePhoto: "",
  });
  const [id, setId] = useState("");

  async function get() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_KEY}/api/current-user`
      );
      console.log("get successful:", response.data.data);
      let auth = response.data.data;
      setFormData({
        name: auth.name,
        email: auth.email,
        profilePhoto:auth.profilePhoto
      });
      setId(auth._id);
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: e.target.files[0],
    }));
  };

  async function handleSubmit(e) {
    setloading(true)
    e.preventDefault();
    console.log("submit");

    // Create a new FormData object to handle the form data, including the file
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    if (formData.profilePhoto) {
      formDataToSend.append('profilePhoto', formData.profilePhoto);
    }

    try {

      const response = await axios.put(
        `${import.meta.env.VITE_API_KEY}/api/update-profile/${id}`,
        formDataToSend
       
      );
      console.log("updated successfully:", response);
      get()
      // setFormData({ name: '', profilePhoto:"" });
      setloading(false)
    } catch (err) {
      console.log("error", err);
      setloading(false)
    }
  }

  console.log("formdata", formData);
  return (
    <div className="flex w-full">
      {see ? <Userdashboardcomponent collapsed={collapsed} /> : ""}
      <div
        className={`relative homeright right min-h-screen ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}
      >
        <Userdashboardnavbar />

        <div className="w-full flex justify-center mt-9 allorders border-[2px]">
          <div className="w-full py-4 flex justify-center">
            <div className="w-[98%] text-[30px] font-bold">Profile</div>
          </div>
        </div>

        <div className="full flex justify-center my-7">
          <div className="w-[98%] flex justify-between flex-col lg:flex-row">
            <div className="w-[99%] lg:w-[32%] rounded-lg shadow-lg bg-white flex justify-center items-center flex-col p-2">
              <div className="rounded-full bg-black h-[220px] w-[220px]">
                <img
                
                  src=
                  {formData.profilePhoto?`${formData.profilePhoto}`:
                  "../../../public/IMG-20240712-WA0094-removebg-preview.png"
                }
                  className="w-full h-full rounded-full"
                  alt="logo"
                />
              </div>
              <div className="my-2">MuhammadRiyansadiq</div>
              <div className="text-blue-400 underline">{formData.email}</div>
              <div>Role: User</div>
            </div>
            <div className="w-[99%] lg:w-[62%] mt-6 bg-white rounded-lg shadow-lg py-1 lg:mt-0">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="pl-8">
                  <label htmlFor="name" className="cursor-pointer">
                    Name
                  </label>
                  <br />
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    value={formData.name}
                    type="text"
                    id="name"
                    className="pl-3 border-[1px] w-11/12 py-3 rounded-lg"
                  />
                </div>

                <div className="pl-8 mt-6">
                  <label htmlFor="file" className="cursor-pointer">
                    Photo
                  </label>
                  <br />
                  <input
                    onChange={handleFileChange}
                    type="file"
                    id="file"
                    className="pl-3 border-[1px] w-11/12 py-3 rounded-lg"
                  />
                </div>

                <div className="my-6 flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white rounded-lg py-3 w-3/12"
                  >
                    {loading?"Loading..."
                  :"Update"
                  }
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

export default Dashboard;
