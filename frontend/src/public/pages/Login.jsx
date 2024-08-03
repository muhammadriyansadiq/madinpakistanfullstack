import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../utils/AuthProvider';

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
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
      let user = response.data.data.user;
      let accessToken = response.data.data.accessToken;
      // Store token in local storage
      localStorage.setItem('accessToken', accessToken);
      setLoading(false);
      setAuthErr("");
      setUser(user);//
      if(response.status === 200){
        navigate('/')
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
                {authErr === "invalid user credential" && <div className='text-red-400'>{authErr}</div>}
                <Link to={'/forgetpassword'} className=' text-blue-400 text-start mt-2'>Forget Password</Link>
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
