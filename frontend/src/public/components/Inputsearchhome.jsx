import React from 'react'
import { Button, Dropdown, Space,Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
const Inputsearchhome = () => {
 const items = [
    {
      key: "1",
      label: <Link className="mg-ten">1st menu item</Link>,
    },
    {
      key: "2",
      label: <Link className="mg-ten">2nd menu item</Link>,
    },
    {
      key: "3",
      label: <Link className="mg-ten">3rd menu item</Link>,
    },
  ];


  return (
    <div>
        <div className=" w-11/12 my-4 lg:w-full flex justify-center homesearch lg:my-0">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <Button
                className="  flex justify-between h-[4vh] lg:h-[8vh]"
                style={{
                  backgroundColor: "white",
                  borderColor: "#38A169",
                  color: "#38A169",
                  borderTopRightRadius: "1px",
                  borderBottomRightRadius: "1px",
                }}
              >
                <div className=" text-[12px] lg:text-[16px]">Allcategory</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </Button>
            </Dropdown>
            <Space direction="vertical">
              <Space wrap></Space>
            </Space>
            <input
              type="text"
              className="border-[1px] border-green-600  w-7/12 lg:w-full pl-2 h-[4vh] lg:h-[8vh] text-[12px] lg:text-[16px]"
              placeholder=" Search product here.."

            />
            <button className=" border-[1px]  w-2/12 border-green-600  bg-green-600 rounded-r-md text-white text-[12px] lg:text-[16px]">
              Search
            </button>
          </div>
    </div>
  )
}

export default Inputsearchhome;