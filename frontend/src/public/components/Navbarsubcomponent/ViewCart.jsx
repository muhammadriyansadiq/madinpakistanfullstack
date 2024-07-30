import React from 'react'
import { Button, Dropdown, Space,Menu } from "antd";
import"../../../App.css"
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
const ViewCart = () => {

    const items = [
        {
          key: '1',
          label: (
            <>
            <div className=' flex justify-between  w-[200px]'>
<div>0Item</div>
<div>View Cart</div>
            </div>
            </>
          ),
        },
        {
          key: '2',
          label: (
           <div><hr /></div>

          ),
        },
        {
          key: '3',
          label: (
            <>
            <div className=' flex justify-between  w-[200px]'>
<div>Total</div>
<div>Rs.0</div>
            </div>
            </>
          ),
        },

        {
            key: '4',
            label: (
             <div><hr /></div>
  
            ),
          },

          {
            key: '5',
            label: (

 <div className=' flex justify-center'>

                <Link to={'/checkout'} className='text-center bg-green-600 px-8 w-full py-3 rounded-lg text-white'>Checkout</Link>
                </div>  
            ),
          },
      ];
      
  return (

    <div className=' viewcart'>
        <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"

      >
        <div className=' cursor-pointer flex items-center ml-4'>
            <div className=' flex items-center'>
                <div className=' relative flex items-center'>
                    <CiShoppingCart  className=' text-[26px]'/>
                    <div className=' absolute left-[16px] bg-green-600 h-[20px] w-[20px] rounded-full flex justify-center items-center text-white'>1</div>
                </div>
            </div> 
        </div>
      </Dropdown>

 </Space>
  </Space>
    </div>

  )
}

export default ViewCart