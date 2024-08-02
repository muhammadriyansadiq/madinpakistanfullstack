
// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Button, Form, Input, Spin } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// axios.defaults.withCredentials = true;
// const navigate = useNavigate()
// const Login = () => {
//   // const [errors, setErrors] = useState({});
//   const [loading,setloading] = useState(false)
//   const[auherr,setautherr] = useState("")
//   const [formData, setFormData] = useState({
  
//     email: '',
//     password: '',

//   });
//   const handleSubmit = async (e) => {
//     setloading(true);
//     e.preventDefault();
//     console.log('submitted form');

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/login`, formData);
//       console.log('Register created successfully:', response.data.data.user.role);
//       let checkrole = response.data.data.user.role
//       setloading(false);
// setautherr("")
// if(checkrole && checkrole === "user"){
// navigate('/')
// }
// else{
//   alert("ok")
// }
// setFormData({ name: '', email: '', password: '', confirmPassword: '' });

//     } catch (error) {
//       console.error('Error creating register:', error.response.data);
//       // if(error.response.data.message === "email already exists"){
//         setFormData({ name: '', email: '', password: '', confirmPassword: '' });
// setautherr(error.response.data.message)
//         // alert("email Already Exist")
//         setloading(false)

//       // }
     
  
//       }
//        };




// //   const onFinish = async(values) => {

// //     try{
// //     setloading(true)
// //     const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/login`, values);
// //     console.log('login created successfully:', response);
// //     console.log('Success:', values);
// //   setloading(false)
// // }

// // catch(err){

// //   console.log(err.response.data.message)
// // setautherr(err.response.data.message)
// // setloading(false)

// // }
// //   };
  
//   // const onFinishFailed = (errorInfo) => {
//   // setloading(false)
//   //   console.log('Failed:', errorInfo);
  
//   // };

//   console.log("autherr",auherr)





//   return (
//     <>
//       <div>
//         <Navbar />
//         <div className='text-center flex justify-center items-center flex-col my-3'>
//           <div className='text-[26px]'>
//             Login
//           </div>
//           <div className='w-[50px] h-[2px] bg-green-600 mt-1 mb-3'></div>
//           <div className='mt-6 w-11/12 lg:w-3/12'>
//           <form
//               name="basic"
//               layout="vertical"
//               initialValues={{ remember: true }}
//               onSubmit={handleSubmit}
//               autoComplete="off"
//             >
             
//               {/* Email Field */}

//               <div className=' flex flex-col justify-start mt-4'>
//                 <label htmlFor="email"
//                  label="Email"
//                  name="email"
//                  className=' text-start'
//                 >Email</label>
// <Input
// className=' py-2'
//                 id='name'
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email:e.target.value })}
//                 />
//                 {auherr === "email does not exist"?
//               <div className=' text-red-400'>{auherr}</div>
// :""
//               }
//                 {/* {errors.email && <div className='text-red-400'>{errors.email}</div>} */}
//               </div>
             

//               {/* Password Field */}
             
//               <div className=' flex flex-col justify-start mt-4'>
//                 <label htmlFor="password"
//                  label="password"
//                  name="password"
//                  className=' text-start'
//                 >Password</label>
// <Input
// className=' py-2'
//                 id='password'
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password:e.target.value })}
//                 />
//                  {auherr === "Invalid credentials"?
//               <div className=' text-red-400'>{auherr}</div>
// :""
//               }
//                 {/* {errors.password && <div className='text-red-400'>{errors.password}</div>} */}
//               </div>
//               {/* Confirm Password Field */}
           
             
//               {/* Submit Button */}
//               <Form.Item className=' mt-4'>
//                 <button type="submit" className='mt-3 p-3 rounded-lg bg-green-600 text-white'>
//                   {loading ? "Loading..." : 'Register'}
//                 </button>
//                 <button className='mt-3 ml-4'>
//                   <Link to={'/login'} className='text-green-600 hover:text-green-400'>Login</Link>
//                 </button>
//               </Form.Item>
//             </form>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default Login;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authErr, setAuthErr] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form submitted');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/login`, formData);
      console.log('Login successful:', response.data.data.user.role);
      let checkRole = response.data.data.user.role;
      setLoading(false);
      setAuthErr("");
      
      if (checkRole === "user") {
        navigate('/');
      } else {
        alert("ok");
      }

      setFormData({ email: '', password: '' });
    } catch (error) {
      console.error('Error during login:', error.response.data);
      setAuthErr(error.response.data.message);
      setLoading(false);
    }
  };

  console.log("authErr", authErr);

  return (
    <>
      <div>
        <Navbar />
        <div className='text-center flex justify-center items-center flex-col my-3'>
          <div className='text-[26px]'>Login</div>
          <div className='w-[50px] h-[2px] bg-green-600 mt-1 mb-3'></div>
          <div className='mt-6 w-11/12 lg:w-3/12'>
            <form
              name="basic"
              layout="vertical"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              {/* Email Field */}
              <div className='flex flex-col justify-start mt-4'>
                <label htmlFor="email" className='text-start'>Email</label>
                <Input
                  className='py-2'
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {authErr === "email does not exist" && <div className='text-red-400'>{authErr}</div>}
              </div>

              {/* Password Field */}
              <div className='flex flex-col justify-start mt-4'>
                <label htmlFor="password" className='text-start'>Password</label>
                <Input
                  className='py-2'
                  id='password'
                  type='password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {authErr === "Invalid credentials" && <div className='text-red-400'>{authErr}</div>}
              </div>

              {/* Submit Button */}
              <div className='mt-4'>
                <button type="submit" className='mt-3 p-3 rounded-lg bg-green-600 text-white'>
                  {loading ? "Loading..." : 'Login'}
                </button>
                <button className='mt-3 ml-4'>
                  <Link to={'/register'} className='text-green-600 hover:text-green-400'>Register</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
