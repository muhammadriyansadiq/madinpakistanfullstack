import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { FaRegMessage } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Avatar, Badge } from "antd";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Counter from "../../redux/Counter";
import Chart from "react-apexcharts";
import AdminNavbar from "../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";

const Adminhome = () => {
  // function toggleCollapsed() {
  //   if (window.outerWidth < 768) {
  //     setSee(!see);
  //     setCollapsed(true);
  //     setwidth(true)
  //   } else {
  //     setCollapsed(!collapsed);
  //     setwidth(false)
  //         }

  // };
  console.log("inner width", window.outerWidth);

  //charts
  const revenueData = [
    { date: "1-6-2024", revenue: 2300 },
    { date: "2-6-2024", revenue: 2700 },
    { date: "3-6-2024", revenue: 2800 },
    { date: "4-6-2024", revenue: 2900 },
    { date: "5-6-2024", revenue: 2300 },
    { date: "6-6-2024", revenue: 2700 },
    { date: "7-6-2024", revenue: 2800 },
    { date: "8-6-2024", revenue: 2300 },
    { date: "9-6-2024", revenue: 2700 },
    { date: "10-6-2024", revenue: 2800 },
    { date: "11-6-2024", revenue: 2900 },
    { date: "12-6-2024", revenue: 2300 },
    { date: "13-6-2024", revenue: 2700 },
    { date: "14-6-2024", revenue: 2800 },
  ];
  const revenuedate = revenueData.map((item) => item.date);
  const revenues = revenueData.map((item) => item.revenue);

  // Chart options for the line chart
  const RevenuechartOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 2,
    },
    xaxis: {
      categories: revenuedate,
    },
    title: {
      text: "Daily Revenue",
      align: "center",
      style: {
        color: "#239208",
      },
    },
  };

  // Series data for the line chart
  const RevenuechartSeries = [
    {
      name: "Revenue",
      data: revenues,
      color: "#239208",
    },
  ];

  // piechart
  const options = {
    chart: {
      type: "pie",
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43, 23, 45, 19];
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  // piechart
  return (
    <div className="flex w-full ">
      {see ? (
        <Admindasjboardcomponents
          collapsed={collapsed}
          // toggleCollapsed={toggleCollapsed}
        />
      ) : (
        ""
      )}
      <div
        className={`relative homeright right min-h-screen  xs: ${
          see ? "w-[78%]" : "w-[100%]"
        }  lg:w-full  bg-[#f4f5f8] `}
      >
        <AdminNavbar />
        <div className=" content w-full">
          <div className=" flex justify-center w-full mt-6">
            <div className=" w-[97%] text-[33px] text-[#146430] font-bold  lg:text-left">
              Dashboard
            </div>
          </div>
          {/* ==========4 carts=========== */}
          <div className="flex justify-center w-full flex-wrap   mt-6">
            <div className="  w-[97%] flex justify-start lg:justify-between flex-wrap">
              <div className="w-[95%]  rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-6 flex boreder-[1px] items-center justify-center border-l-[6px] border-blue-500">
                <div className=" w-[85%] flex justify-between items-center">
                  <div>
                    <div className=" text-blue-500">Category</div>
                    <div className=" font-bold">134</div>
                  </div>
                  <div>
                    <BiSolidCategory className=" text-[22px] text-blue-500" />
                  </div>
                </div>
              </div>
              <div className="w-[95%] rounded-lg mt-5 lg:mt-0 lg:w-[22%] bg-white py-5 flex boreder-[1px] items-center justify-center border-l-[6px] border-green-500">
                <div className=" w-[85%] flex justify-between items-center">
                  <div>
                    <div className=" text-green-500">Product</div>
                    <div className=" font-bold">134</div>
                  </div>
                  <div>
                    <MdOutlineProductionQuantityLimits className=" text-[22px] text-green-500" />
                  </div>
                </div>
              </div>
              <div className="w-[95%] mt-5 rounded-lg lg:mt-0 lg:w-[22%] bg-white py-5 flex boreder-[1px] items-center justify-center border-l-[6px] border-sky-600">
                <div className=" w-[85%] flex justify-between items-center">
                  <div>
                    <div className=" text-sky-600">Order</div>
                    <div className=" font-bold">134</div>
                  </div>
                  <div>
                    <FaFirstOrder className=" text-[22px] text-sky-500" />
                  </div>
                </div>
              </div>
              <div className="w-[95%] mt-5  rounded-lg lg:mt-0 lg:w-[22%] bg-white py-5 flex boreder-[1px] items-center justify-center border-l-[6px] border-orange-500">
                <div className=" w-[85%] flex justify-between items-center">
                  <div>
                    <div className=" text-orange-500">Post</div>
                    <div className=" font-bold">134</div>
                  </div>
                  <div className="">
                    <MdOutlineLocalPostOffice className=" text-orange-500 text-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============2 carts ============ */}

          <div className=" w-full flex justify-center my-7">
            <div className=" w-[97%] flex flex-col justify-between lg:flex-row">
              <div className=" border-[1px] rounded-md w-[100%] lg:w-[63%] ">
                <div className=" p-4 text-blue-500 text-[17px] font-semibold bg-[#f8f9fc] border-b-[1px]">
                  Earning Overviews
                </div>
                <div>
                  <div className="mt-2 sales w-full lg:w-11/12 ml-auto mr-auto border-[4px] revenue">
                    <Chart
                      className=" overflow-x-auto overflow-y-hidden"
                      options={RevenuechartOptions}
                      series={RevenuechartSeries}
                      type="line"
                      width={700}
                      height={280}
                    />
                  </div>
                </div>
              </div>
              <div className=" border-[1px] w-[100%] rounded-md lg:w-[32%] flex flex-col justify-center">
                <div className=" p-4 text-blue-500 text-[17px] font-semibold bg-[#f8f9fc] border-b-[1px]">
                  Users
                </div>
                <div className=" flex justify-center items-center h-full ">
                  <div className="pie-chart overflow-x-auto overflow-y-hidden   flex flex-col justify-around  h-full items-center">
                    <div>7 Days Registered User</div>
                    <Chart
                      className=" "
                      options={options}
                      series={series}
                      type="pie"
                      height={400}
                      width={380}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-[15%] lg:left-[50%]">
          Copyright © Bachat Mart. 2024
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
