
// import React, { useState, useEffect } from 'react';
// import "../../App.css";
// import { useSelector, useDispatch } from 'react-redux';
// import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
// import AdminNavbar from "../components/AdminNavbar";
// import Copyright from './Copyright';
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// axios.defaults.withCredentials = true;

// const Admincategoryidedit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const collapsed = useSelector((state) => state.counter.collapsed);
//   const see = useSelector((state) => state.counter.see);
//   const [loading,setloading] = useState(false)
 
//   const [formData, setFormData] = useState({
//     title: '',
//     summary: '',
//     parentCategory: '',
//     status: 'Active',
//   });
//   const [isParent, setIsParent] = useState(false);
//   const [categoryImage, setCategoryImage] = useState(null);

//   const fetchBanner = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/category`);
// console.log(response.data.data)
//       response.data.data.forEach((data,ind)=>{
//         if(data._id === id){

//           console.log("filtereddata",data)
// setFormData({
//         title: data.title,
//         summary: data.summary,
//         categoryImage: data.categoryImage, // Assuming photo URL or identifier
//         status: data.status,
//       });

//       setIsParent(data.isParent)
//       setCategoryImage(data.categoryImage)

//         }
// // console.log(data._id,ind)
//       })
      
//     } catch (error) {
//       console.error('Error fetching banner data:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch existing banner data for editing
  
//     fetchBanner();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
 
//   const handleFileChange = (e) => {
//     setCategoryImage(e.target.files[0]);
//   };

//   const handleIsParentChange = (e) => {
//     setIsParent(e.target.checked);
//     if (!e.target.checked) {
//       setFormData((prevData) => ({
//         ...prevData,
//         parentCategory: '',
//       }));
//     }
//   };
 


//   const handleSubmit = async (e) => {
//     setloading(true)
//     e.preventDefault();
//     const formDataToSend = new FormData();
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('summary', formData.summary);
//     formDataToSend.append('isParent', isParent);
//     formDataToSend.append('parentCategory', formData.parentCategory);
//     formDataToSend.append('categoryImage', categoryImage);
//     formDataToSend.append('status', formData.status);

//     try {
//       const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/category${id}`, formDataToSend);
//       console.log('Category created successfully:', response);
//       setloading(false)
//     } catch (error) {
//       console.error('Error creating category:', error);
//       setloading(false)

//     }
//   };


//   return (
//     <div className="flex w-full ">
//       {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
//       <div className={`relative homeright right min-h-screen xs: ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}>
//         <AdminNavbar />
//         <div className='bg-[#f6f8fb]'>
//           <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
//             <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
//               <div className='flex justify-between p-5 border-b-[1px]'>
//                 <div className='font-sans font-medium text-gray-700 text-[21px]'>Create Category</div>
//               </div>
//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className='p-5 w-full'>
//                   <div>
//                     <label htmlFor="title" className='text-[15px]'>Title</label>
//                     <input
//                       id="title"
//                       name="title"
//                       type='text'
//                       value={formData.title}
//                       onChange={handleChange}
//                       className=' pl-2 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
//                       placeholder='Enter Name'
//                     />
//                   </div>
//                 </div>
//                 <div className='px-5 pb-5 w-full'>
//                   <div>
//                     <label htmlFor="description" className='text-[15px]'>Summary</label>
//                     <input
//                       id="summary"
//                       name="summary"
//                       type='text'
//                       value={formData.summary}
//                       onChange={handleChange}
//                       className='pl-2 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
//                       placeholder='Enter summary'
//                     />
//                   </div>
//                 </div>
//                 <div className='px-5 pb-5 w-full'>
                  
//                   <div>Is Parent</div>
//                   <input
//                     type="checkbox"
//                     id="isParent"
//                     name="isParent"
                    
//                     checked={isParent}
//                     onChange={handleIsParentChange}
//                     className=''
//                   />
//                   <label htmlFor="isParent" className=''> Yes</label>
//                 </div>
//                 {isParent  && (
//                   <div className='px-5 pb-1 w-full'>
//                     <div>
//                       <label htmlFor="parentCategory" className='text-[15px]'>ParentCategory</label>
//                       <select
//                         name="parentCategory"
//                         id="parentCategory"
//                         value={formData.parentCategory}
//                         className='px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
//                         onChange={handleChange}
//                       >
//                         <option value=""> --- Select Any Category --- </option>
//                         <option value="Automotive & Motorbike">Automotive & Motorbike</option>
//                         <option value="Electronic Electronic accessories">Electronic Electronic accessories</option>
//                         <option value="Electronic Devices">Electronic Devices</option>
//                         <option value="Groceries & Pets">Groceries & Pets</option>
//                         <option value="Home & Lifestyle">Home & Lifestyle</option>
//                         <option value="Women's Fashion">Women's Fashion</option>
//                         <option value="Tv & Home Appliances">Tv & Home Appliances</option>
//                       </select>
//                     </div>
//                   </div>
//                 )}

// <div className='px-5 pb-5 w-full mt-5'>
//                   <div>
//                     <label htmlFor="file" className='text-[15px]'>Photo</label>
//                     <input
//                       id="file"
//                       name="categoryImage"
//                       type='file'
//                       onChange={handleFileChange}
//                       className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
//                     />
//                     <img src={formData.categoryImage} className=' h-[50px] w-[50px] rounded-full mt-5' alt="" />
//                   </div>
//                 </div>


// <div className='px-5 pb-1 w-full'>
//                     <div>
//                       <label htmlFor="status" className='text-[15px]'>Status</label>
//                       <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         id="status"
//                         className='px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
//                       >
//                          <option value="Active">Active</option>
//                         <option value="Inactive">In Active</option>
//                       </select>
//                     </div>
// </div>
//                 <div className='p-5 w-full'>
//                   <div>
//                     <button
//                       type="submit"
//                       className='ml-0 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
//                     >
//                       {loading?"Loading...":
//                       "Edit"
//                     }
//                     </button>
//                   </div>
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

// export default Admincategoryidedit;


import React, { useState, useEffect } from 'react';
import "../../App.css";
import { useSelector } from 'react-redux';
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import AdminNavbar from "../components/AdminNavbar";
import Copyright from './Copyright';
import axios from "axios";
import { useParams } from 'react-router-dom';

axios.defaults.withCredentials = true;

const Admincategoryidedit = () => {
  const { id } = useParams();
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    parentCategory: '',
    status: 'Active',
  });
  const [isParent, setIsParent] = useState(false);
  const [categoryImage, setCategoryImage] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_KEY}/api/category`);
      response.data.data.forEach((data) => {
        if (data._id === id) {
          setFormData({
            title: data.title,
            summary: data.summary,
            parentCategory: data.parentCategory,
            status: data.status,
          });
          setIsParent(data.isParent);
          setCategoryImage(data.categoryImage);
        }
      });
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleIsParentChange = (e) => {
    setIsParent(e.target.checked);
    if (!e.target.checked) {
      setFormData((prevData) => ({
        ...prevData,
        parentCategory: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('summary', formData.summary);
    formDataToSend.append('isParent', isParent);
    formDataToSend.append('parentCategory', formData.parentCategory);
    formDataToSend.append('categoryImage', categoryImage);
    formDataToSend.append('status', formData.status);

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_KEY}/api/category/${id}`, formDataToSend);
      console.log('Category updated successfully:', response);
      setLoading(false);
    } catch (error) {
      console.error('Error updating category:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
      <div className={`relative homeright right min-h-screen xs: ${see ? "w-[78%]" : "w-[100%]"} lg:w-full bg-[#f4f5f8]`}>
        <AdminNavbar />
        <div className='bg-[#f6f8fb]'>
          <div className='w-full mt-9 flex justify-center allorders bg-[#f6f8fb]'>
            <div className='w-full mt-2 border-[2px] rounded-md mb-3 bg-white'>
              <div className='flex justify-between p-5 border-b-[1px]'>
                <div className='font-sans font-medium text-gray-700 text-[21px]'>Edit Category</div>
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
                    <label htmlFor="summary" className='text-[15px]'>Summary</label>
                    <input
                      id="summary"
                      name="summary"
                      type='text'
                      value={formData.summary}
                      onChange={handleChange}
                      className='pl-2 mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                      placeholder='Enter summary'
                    />
                  </div>
                </div>
                <div className='px-5 pb-5 w-full'>
                  <div>Is Parent</div>
                  <input
                    type="checkbox"
                    id="isParent"
                    name="isParent"
                    checked={isParent}
                    onChange={handleIsParentChange}
                    className=''
                  />
                  <label htmlFor="isParent" className=''> Yes</label>
                </div>
                {!isParent && (
                  <div className='px-5 pb-1 w-full'>
                    <div>
                      <label htmlFor="parentCategory" className='text-[15px]'>ParentCategory</label>
                      <select
                        name="parentCategory"
                        id="parentCategory"
                        value={formData.parentCategory}
                        className='px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                        onChange={handleChange}
                      >
                        <option value=""> --- Select Any Category --- </option>
                        <option value="Automotive & Motorbike">Automotive & Motorbike</option>
                        <option value="Electronic Electronic accessories">Electronic Electronic accessories</option>
                        <option value="Electronic Devices">Electronic Devices</option>
                        <option value="Groceries & Pets">Groceries & Pets</option>
                        <option value="Home & Lifestyle">Home & Lifestyle</option>
                        <option value="Women's Fashion">Women's Fashion</option>
                        <option value="Tv & Home Appliances">Tv & Home Appliances</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className='px-5 pb-5 w-full mt-5'>
                  <div>
                    <label htmlFor="file" className='text-[15px]'>Photo</label>
                    <input
                      id="file"
                      name="categoryImage"
                      type='file'
                      onChange={handleFileChange}
                      className='mt-2 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                    />
                    {categoryImage && (
                      <img
                        src={typeof categoryImage === 'string' ? categoryImage : URL.createObjectURL(categoryImage)}
                        className='h-[50px] w-[50px] rounded-full mt-5'
                        alt=""
                      />
                    )}
                  </div>
                </div>

                <div className='px-5 pb-1 w-full'>
                  <div>
                    <label htmlFor="status" className='text-[15px]'>Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      id="status"
                      className='px-1 mt-2 py-3 leading-10 border-[1px] border-gray-500 rounded-md w-full'
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className='p-5 w-full'>
                  <div>
                    <button
                      type="submit"
                      className='ml-0 bg-green-700 py-2 border-[2px] font-semibold border-green-700 hover:bg-white hover:text-green-700 px-5 text-white rounded-md'
                    >
                      {loading ? "Loading..." : "Edit"}
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

export default Admincategoryidedit;
