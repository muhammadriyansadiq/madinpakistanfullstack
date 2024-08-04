import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navscrolldown = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, Sethovered] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menuItems = (
    <Menu>
      <Menu.SubMenu
        title="Automobile & Motorbike"
        className={`border-none text-[17px] font-semibold 
            ${
              hovered === "Automobile & Motorbike"
                ? " bg-green-500 "
                : "bg-white "
            }
          ${
            hovered === "Automobile & Motorbike"
              ? "text-white  "
              : " text-black"
          }
          
          `}
        onMouseEnter={() => Sethovered("Automobile & Motorbike")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="3" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="4" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Electronic Accessories"
        className={`border-none text-[17px] font-semibold 
            ${
              hovered === "Electronic Accessories"
                ? " bg-green-500 "
                : "bg-white "
            }
          
          
          `}
        onMouseEnter={() => Sethovered("Electronic Accessories")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="3" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="4" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Electronic Devices"
        className={`${
          hovered === "Electronic Devices" ? "bg-green-500 " : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Electronic Devices")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="5" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="6" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Groceries & Pets"
        className={`${
          hovered === "Groceries & Pets" ? "bg-green-500" : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Groceries & Pets")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="7" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="8" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Healt & Beauty"
        className={`${
          hovered === "Healt & Beauty" ? "bg-green-500 " : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Healt & Beauty")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="9" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="10" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Home & Lifestyle"
        className={`${
          hovered === "Home & Lifestyle" ? "bg-green-500" : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Home & Lifestyle")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="11" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="12" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Men's Fashion"
        className={`${
          hovered === "Men's Fashion" ? "bg-green-500" : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Men's Fashion")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="13" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="14" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Mother & Baby"
        className={`${
          hovered === "Mother & Baby" ? "bg-green-500 " : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Mother & Baby")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="15" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="16" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Sports & Outdoor"
        className={`${
          hovered === "Sports & Outdoor" ? "bg-green-500 " : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Sports & Outdoor")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="17" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="18" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Tv, Home & Appliances"
        className={`${
          hovered === "Tv, Home & Appliances" ? "bg-green-500 " : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Tv, Home & Appliances")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="19" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="20" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Watches,bags & Jewellery"
        className={`${
          hovered === "Watches,bags & Jewellery"
            ? "bg-green-500 text-white"
            : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Watches,bags & Jewellery")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="21" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="22" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title="Women's Fashion"
        className={`${
          hovered === "Women's Fashion" ? "bg-green-500 text-white" : "bg-white"
        }`}
        onMouseEnter={() => Sethovered("Women's Fashion")}
        onMouseLeave={() => Sethovered("")}
      >
        <Menu.Item key="23" className="mg-ten ">
          Mobile Accessories
        </Menu.Item>
        <Menu.Item key="24" className="mg-ten ">
          Computer Accessories
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <>
      {/* Scroll Home */}
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-all duration-1000 ${
          isScrolled ? "bg-white shadow-lg" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex justify-center">
          <div className="w-11/12  flex justify-center">
            <div className="w-11/12 py-4 relative flex justify-between flex-wrap items-center lg:flex-nowrap lg:w-6/12 lg:py-2">
              <Link to={'/'} className=" cursor-pointer font-semibold border-b-[3px] border-green-600 text-green-600 p-1 lg:p-2  text-[10px] lg:text-[14px] rounded-sm hover:text-white hover:bg-green-600  lg:m-0" >
                Home
              </Link>
              <Link to={'/aboutus'} className=" cursor-pointer font-semibold border-b-[3px] border-green-600 text-green-600 p-1 lg:p-2  text-[10px] lg:text-[14px]  rounded-sm hover:text-white hover:bg-green-600  lg:m-0">
                About
              </Link>
             
 <Link to={'/product'} className="relative cursor-pointer font-semibold border-b-[3px] border-green-600 text-green-600 p-1 lg:p-2  text-[10px] lg:text-[14px]  rounded-sm   lg:m-0">
               <div className=" absolute rounded-lg top-[-9px] text-[10px] left-1 bg-green-600 text-white px-2 lg:left-4 lg:top-[-4px]">New</div>
               <div>Product</div> 
              </Link>
              <div className="category cursor-pointer  text-[10px] lg:text-[14px] font-semibold border-b-[3px] border-green-600 text-green-600  rounded-sm hover:text-white hover:bg-green-600  lg:m-0">
                <Space>
                  <Dropdown
                    overlay={menuItems}
                    overlayClassName="category-dropdown"
                    placement="bottom"
                  >
                    <button
                      onMouseEnter={() => Sethovered("category")}
                      onMouseLeave={() => Sethovered("")}
                      className={`border-none   text-[10px] lg:text-[14px] font-semibold ${
                        hovered ? "bg-green-600" : "bg-white"
                      } ${hovered ? "text-white" : ""} p-1 lg:p-2 rounded-sm`}
                    >
                      Category
                    </button>
                  </Dropdown>
                </Space>
              </div>
              <Link to={"/contactus"} className=" cursor-pointer text-[10px] lg:text-[14px] font-semibold border-b-[3px] border-green-600 text-green-600 p-1 lg:p-2 rounded-sm hover:text-white hover:bg-green-600  lg:m-0">
                Contact Us
              </Link >
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navscrolldown;
