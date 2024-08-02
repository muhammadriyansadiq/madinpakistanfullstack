

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Form, Input, Spin } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('submitted form');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/register`, formData);
      console.log('Register created successfully:', response);
      setLoading(false);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setErrors({}); // Reset errors on successful submission

    } catch (error) {
      console.error('Error creating register:', error.response.data);
      if(error.response.data.message === "email already exists"){
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });

        alert("email Already Exist")
        setLoading(false)

      }
      else{
        const backendErrors = error.response.data.errors;
        const newErrors = {};
  
        backendErrors.forEach((err) => {
          newErrors[err.path] = err.message;
        });
  
        setErrors(newErrors);
        setLoading(false);
      }
  
      }
       };
console.log("formdata",formData)
  return (
    <>
      <div>
        <Navbar />
        <div className='text-center flex justify-center items-center flex-col my-3'>
          <div className='text-[26px]'>Register</div>
          <div className='w-[50px] h-[2px] bg-green-600 mt-1 mb-3'></div>
          <div>Please register in order to checkout more quickly</div>
          <div className='mt-6 w-11/12 lg:w-3/12'>
            <form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className=' flex flex-col justify-start mt-4'>
              {/* Username Field */}
              <label
                label="Name"
                name="name"
                htmlFor='name'
                className=' text-start'
                validateStatus={errors.name ? 'error' : ''}
                // help={errors.name}
              >
                Name
                </label>
                <Input
                id='name'
                className=' py-2'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <div className='text-red-400'>{errors.name}</div>}
           
                </div>
              {/* Email Field */}

              <div className=' flex flex-col justify-start mt-4'>
                <label htmlFor="email"
                 label="Email"
                 name="email"
                 className=' text-start'
                 validateStatus={errors.name ? 'error' : ''}
                >Email</label>
<Input
className=' py-2'
                id='name'
                type='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email:e.target.value })}
                />
                {errors.email && <div className='text-red-400'>{errors.email}</div>}
              </div>
             

              {/* Password Field */}
             
              <div className=' flex flex-col justify-start mt-4'>
                <label htmlFor="password"
                 label="password"
                 name="password"
                 className=' text-start'
                 validateStatus={errors.name ? 'error' : ''}
                >Password</label>
<Input
className=' py-2'
                id='password'
                type='password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password:e.target.value })}
                />
                {errors.password && <div className='text-red-400'>{errors.password}</div>}
              </div>
              {/* Confirm Password Field */}
           
              <div className=' flex flex-col justify-start mt-4'>
                <label htmlFor="confirmPassword"
                 label="confirmPassword"
                 name="confirmPassword"
                 className=' text-start'
                 validateStatus={errors.name ? 'error' : ''}
                >confirmPassword</label>
<Input
className=' py-2'
type='password'
                id='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword:e.target.value })}
                />
                {errors.confirmPassword && <div className='text-red-400'>{errors.confirmPassword}</div>}
              </div>
              {/* Submit Button */}
              <Form.Item className=' mt-4'>
                <button type="submit" className='mt-3 p-3 rounded-lg bg-green-600 text-white'>
                  {loading ? "Loading..." : 'Register'}
                </button>
                <button className='mt-3 ml-4'>
                  <Link to={'/login'} className='text-green-600 hover:text-green-400'>Login</Link>
                </button>
              </Form.Item>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
