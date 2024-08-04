import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navcomp = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, Sethovered] = useState("");
const navigate = useNavigate()
  function setclick(path)
  {
    navigate(`/products${path}`)
    console.log("ok done")
  }
 const menuItems = (
    <Menu>
      <Menu.SubMenu
      
        title={`Automobile & Motorbike`}
        className={` border-none text-[17px] font-semibold 
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
        onTitleClick={() => setclick("/automobile-motorbike")} // Handle SubMenu click
      >
        <Menu.Item key="3" className="mg-ten">
         <Link to={"/products/category/items"}> Mobile Accessories </Link>
        </Menu.Item>
        <Menu.Item key="4" className="mg-ten ">
        <Link to={"/products/category/items"}> Link  Computer Accessories</Link>
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
        <Link to={"/products/category/items"}> Mobile Accessories </Link> 
        </Menu.Item>
        <Menu.Item key="4" className="mg-ten ">
        <Link to={"/products/category/items"}>
         Computer Accessories
        </Link> 
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
        <Link to={"/products/category/items"}>
         Mobile Accessories
        </Link> 
        </Menu.Item>
        <Menu.Item key="6" className="mg-ten ">
        <Link to={"/products/category/items"}>
         Computer Accessories
        </Link> 
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
        </Link>
        </Menu.Item>
        <Menu.Item key="8" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
        </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
        </Link>
        </Menu.Item>
        <Menu.Item key="10" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
        </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
        </Link>
        </Menu.Item>
        <Menu.Item key="12" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
        </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="14" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="16" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="18" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="20" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="22" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
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
        <Link to={"/products/category/items"}>
          Mobile Accessories
          </Link>
        </Menu.Item>
        <Menu.Item key="24" className="mg-ten ">
        <Link to={"/products/category/items"}>
          Computer Accessories
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <>
      {/* Scroll Home */}
      <nav
        className=" w-full  z-40 bg-green-600 mt-2 lg:mt-0"
      >
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-11/12  flex justify-center">
            <div className="w-full py-2  lg:py-4 relative flex justify-between flex-wrap items-center lg:flex-nowrap lg:w-6/12">
              <Link to={"/"} className=" cursor-pointer text-[10px] lg:text-[16px] font-semibold border-b-[3px] border-white text-white p-1 lg:p-1 rounded-sm hover:text-green-600 hover:bg-white m-2 lg:m-0" >
                Home
              </Link>
              <Link to={'/aboutus'} className=" cursor-pointer text-[10px] lg:text-[16px] font-semibold border-b-[3px] border-white text-white p-1 lg:p-1 rounded-sm hover:text-green-600 hover:bg-white m-2 lg:m-0">
                About
              </Link>

              <Link to={'/product'} className=" cursor-pointer text-[10px] lg:text-[16px] font-semibold border-b-[3px] border-white text-white p-1 lg:p-1 rounded-sm   m-2 lg:m-0 relative hover:border-green-500">
               <div className=" text-[10px] px-1 lg:px-0 lg:text-[12px] bg-white text-green-600 text-center rounded-sm lg:w-[45px] absolute top-[-11px] lg:top-[-12px] left-2">New</div> 
               <div>Product</div>
              </Link>
            

              <div className="category cursor-pointer text-[10px] lg:text-[16px] border-white font-semibold border-b-[3px]  text-white  rounded-sm hover:text-white hover:bg-green-600 m-2 lg:m-0">
                <Space>
                  <Dropdown
                    overlay={menuItems}
                    overlayClassName="category-dropdown"
                    placement="bottom"
                  >
                    <button
                      onMouseEnter={() => Sethovered("category")}
                      onMouseLeave={() => Sethovered("")}
                      className={`border-white text-[10px] lg:text-[16px] font-semibold ${
                        hovered ? "bg-white" : "bg-green-600"
                      } ${hovered ? "text-green-600" : "text-white"} p-1 lg:p-1 rounded-sm`}
                    >
                      Category
                    </button>
                  </Dropdown>
                </Space>
              </div>
              <Link to={"/contactus"} className=" cursor-pointer text-[10px] lg:text-[16px] font-semibold border-b-[3px] border-white text-white lg:p-1 rounded-sm hover:text-green-600 hover:bg-white m-2 lg:m-0">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navcomp;
