import React from 'react'
import { Button, Dropdown, Space,Menu } from "antd";
import"../../../App.css"
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
const Wishlist = () => {

    const items = [
        {
          key: '1',
          label: (
            <>
            <div className=' flex justify-between  w-[200px]'>
<div>0Item</div>
<div>View Wishlist</div>
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

                <Link to={'/cart'} className='text-center bg-green-600 px-8 w-full py-3 rounded-lg text-white'>Cart</Link>
                </div>
  
            ),
          },
      ];
      
  return (

    <div className=' wishlist'>
        <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"

      >
        <div className=' cursor-pointer flex items-center'>
            <div className=' flex items-center'>
                <div className=' relative flex items-center'>
                    <IoIosHeartEmpty  className=' text-[22px]'/>
                    <div className=' absolute left-[14px] bg-green-600 h-[20px] w-[20px] rounded-full flex justify-center items-center text-white'>1</div>
                </div>
            </div> 
        </div>
      </Dropdown>

 </Space>
  </Space>
    </div>

  )
}

export default Wishlist