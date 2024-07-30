
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

const Register = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='text-center flex justify-center items-center flex-col my-3'>
          <div className='text-[26px]'>
            Register
          </div>
          <div className='w-[50px] h-[2px] bg-green-600 mt-1 mb-3'></div>
          <div>
            Please register in order to checkout more quickly
          </div>
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
              {/* Username Field */}
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <input type='text' className='w-full py-3 rounded-md pl-2 border-[1px] hover:border-green-600'/>
              </Form.Item>

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

              {/* Confirm Password Field */}
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <input type='password' className='w-full py-3 rounded-md pl-2 border-[1px] hover:border-green-600'/>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <button className='mt-3 bg-green-600 py-4 px-5 rounded-lg text-white hover:text-green-400'>
                  Register
                </button>
                <button className='mt-3 ml-4 bg-green-600 py-4 px-5 rounded-lg text-white hover:text-green-400'>
                <Link to={'/login'} className=' hover:text-green-400'>  Login </Link>
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

export default Register;
