import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

const Userdashboardcomponent = ({ collapsed, toggleCollapsed }) => {
  const location = useLocation();

  const items = [

    {
        label: <div className=" text-[19px] font-bold  text-center">User</div>,
      },
    {
      key: "/dashboard",
      icon: <PieChartOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },

    {
        label: <span className=" text-[16px] font-bold">Shop</span>,
      },
  
  

    

    
    {
      label: <Link to="/orders">Orders</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: <Link to="/reviews">Reviews</Link>,
      icon: <AppstoreOutlined />,
    },

    
    {
        label: <span className=" text-[16px] font-bold">Posts</span>,
      },
  

    {
      label: <Link to="/comments">Comments</Link>,
      icon: <AppstoreOutlined />,
    },
  ];

  return (
    <>
      <div
        className={
          collapsed ? "admin-dashboard collapsed" : "admin-dashboard expanded"
        }
      >
        <Menu
          className="border-[1px] h-full items-center bg-[#146430] lg:w-full"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={["sub1"]}
          mode="vertical"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};

export default Userdashboardcomponent;
