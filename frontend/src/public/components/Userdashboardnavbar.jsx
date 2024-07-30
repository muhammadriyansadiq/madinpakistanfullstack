import React, { useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FaRegMessage } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setcollapsed, setsee, setwidth } from "../../redux/Counterslice";
import { Button, Dropdown, Space } from 'antd';
const items = [
    {
      key: '1',
      label: (
        <button>Logout</button>
      ),
    },
    {
        key: '2',
        label: (
          <Link to={'/dashboard'}>Profile</Link>
        ),
      },
   
  ];
const Userdashboardnavbar = () => {

  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  console.log("see", see);
  
  useEffect(() => {
    if (window.outerWidth < 768) {
      dispatch(setsee(!see));
      toggleCollapsed();
      dispatch(setcollapsed(true));
      dispatch(setwidth(true));
    } else {
      dispatch(setsee(true));
     
      dispatch(setcollapsed(false));
      toggleCollapsed();
      dispatch(setwidth(false));
      // setwidth(false)
    }
  }, [window.outerWidth]);

  function toggleCollapsed() {
    if (window.outerWidth < 768) {
      // setSee(!see);
      dispatch(setsee(!see));
      // setCollapsed(true);
      dispatch(setcollapsed(true));
      // setwidth(true)
      dispatch(setwidth(true));
    } else {
      // setCollapsed(!collapsed);
      dispatch(setcollapsed(!collapsed));
      // setwidth(false)
      dispatch(setwidth(false));
    }
  }

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

  return (
    <div>
      <div className="flex justify-center bg-white py-4 shadow-lg w-full px-1">
        <div className="w-[100%] items-center  flex justify-center lg:justify-between lg:w-[98%]">
          <div className="   flex justify-between items-center   w-[80%] lg:w-[90%] lg:border-r-[2px]">
            <div
              className=" flex items-center justify-around  w-[60%] 
  lg:w-[15%] lg:justify-between"
            >
              <Button
                className="border-[1px] border-[#146430] text-[#146430] "
                onClick={toggleCollapsed}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <button className="font-semibold text-[#146430] rounded-md border-[1px] border-[#146430] p-1 hover:bg-[#146430] hover:text-white text-[14px]">
                Cash clear
              </button>
              
            </div>
            <div className="    items-center w-8/12  hidden lg:flex">
            <input type="text" className=" border-[1px] py-2 rounded-l-lg w-7/12" name="" id="" />
             <button className=" bg-green-600 py-2 px-2 rounded-r-lg text-white">Search</button>
            </div>
          </div> 
          <div className=" w-[50%]   justify-end hidden lg:flex lg:justify-around  items-center lg:w-[12%]">
            <div className=" mr-4 lg:mr-0 lg:ml-4">User</div>
           {/* ======profileimg========== */}
             <Space direction="vertical">
             <Space wrap>
             <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <button>
        <img
                src="../../../public/IMG-20240712-WA0094-removebg-preview.png"
                className=" w-[100%] h-[40px]"
                alt=""
              />
        </button>
      </Dropdown>
             </Space>
             </Space>
            {/* ======profileimg========== */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboardnavbar;
