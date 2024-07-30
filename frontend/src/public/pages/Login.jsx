
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Form } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='text-center flex justify-center items-center flex-col my-3'>
          <div className='text-[26px]'>
            Login
          </div>
          <div className='w-[50px] h-[2px] bg-green-600 mt-1 mb-3'></div>
          <div className='mt-6 w-11/12 lg:w-3/12'>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
            

              {/* Email Field */}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                    type: 'email',
                  },
                ]}
              >
                <input type='email' className='w-full py-3 rounded-md pl-2 border-[1px] hover:border-green-600'/>
              </Form.Item>

              {/* Password Field */}
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <input type='password' className='w-full py-3 rounded-md pl-2 border-[1px] hover:border-green-600'/>
              </Form.Item>

             

              {/* Submit Button */}
              <Form.Item className='  flex justify-start'>
                <button className='mt-3 bg-green-600 py-4 px-5 rounded-lg text-white hover:text-green-400'>
                  Login
                </button>
              </Form.Item>
              <div className='mt-3 flex justify-start  rounded-lg text-blue-400  hover:text-green-400'>
                If you did not login please register first
                </div>
              <Form.Item>
                <button className='flex justify-start mt-5  bg-green-600 py-4 px-5 rounded-lg text-white hover:text-green-400'>
                <Link to={'/register'} className=' hover:text-green-400'>  Register </Link>
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Login;
