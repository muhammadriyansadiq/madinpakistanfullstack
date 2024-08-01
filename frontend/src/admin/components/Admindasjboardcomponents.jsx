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

const Admindasjboardcomponents = ({ collapsed, toggleCollapsed }) => {
  const location = useLocation();

  const items = [
    {
      key: "/homedashboard",
      icon: <PieChartOutlined />,
      label: <Link to="/homedashboard">Dashboard</Link>,
    },

    {
      label: <span className=" text-[16px] font-bold">Banners</span>,
    },

    {
      key: "sub1",
      label: "Banners",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/banners",
          label: <Link to="/admin/banner">Banners</Link>,
        },
        {
          key: "/addbanners",
          label: <Link to="/admin/banner/create">Add Banners</Link>,
        },
      ],
    },

    {
      label: <span className=" text-[16px] font-bold">Shops</span>,
    },

    {
      key: "sub2",
      label: "Category",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/category",
          label: <Link to="/category">Category</Link>,
        },
        {
          key: "/addcategory",
          label: <Link to="/admin/category/create">Add Category</Link>,
        },
   
      ],
    },

    {
      key: "sub3",
      label: "Products",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/products",
          label: <Link to="/admin/product">Products</Link>,
        },
        {
          key: "/addproducts",
          label: <Link to="/admin/product/create">Add Products</Link>,
        },
      ],
    },

    {
      key: "sub4",
      label: "Brands",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/brands",
          label: <Link to="/admin/brand">Brands</Link>,
        },
        {
          key: "/addbrands",
          label: <Link to="/admin/brand/create">Add Brands</Link>,
        },
      ],
    },

    {
      key: "sub5",
      label: "Shipping",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/shipping",
          label: <Link to="/admin/shipping">Shippings</Link>,
        },
        {
          key: "/addshipping",
          label: <Link to="/admin/shipping/create">Add Shippings</Link>,
        },
      ],
    },

    {
      label: <Link to="/admin/order">Orders</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: <Link to="/admin/review">Reviews</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: <span className=" text-[16px] font-bold">Posts</span>,
    },

    {
      key: "sub6",
      label: "post",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/post",
          label: <Link to="/admin/post">Posts</Link>,
        },
        {
          key: "/addpost",
          label: <Link to="/admin/post/create">Add Posts</Link>,
        },
      ],
    },

    {
      key: "sub7",
      label: "category",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/postcategory",
          label: <Link to="/admin/post/category">Category</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/post/category/create">Add Category</Link>,
        },
      ],
    },

    {
      key: "sub8",
      label: "Tags",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/posttag",
          label: <Link to="/admin/posttag">Tag</Link>,
        },
        {
          key: "/addpostcategory",
          label: <Link to="/admin/posttag/create">Add Tag</Link>,
        },
      ],
    },

    {
      label: <Link to="/admin/postcomment">Comments</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: (
        <span className=" text-[16px] font-bold break-words">
          General Settings
        </span>
      ),
    },

    {
      label: <Link to="/admin/coupon">Coupon</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: <Link to="/admin/user">Users</Link>,
      icon: <AppstoreOutlined />,
    },

    {
      label: <Link to="/admin/setting">Settings</Link>,
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

export default Admindasjboardcomponents;
