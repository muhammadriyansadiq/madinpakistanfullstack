import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdTrackChanges } from "react-icons/md";
import { FaSellsy } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../App.css";
import Navscrolldown from "./Navbarsubcomponent/Navscrolldown";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button, Dropdown, Space, Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import {
  sethamberg,
  setviewcart,
  sethambergexpander,
  setwindowwidth,
  setwishlistopen,
} from "../../redux/Counterslice";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";

import Navcomp from "./Navcomp";
import ViewCart from "./Navbarsubcomponent/ViewCart";
import Wishlist from "./Navbarsubcomponent/Wishlist";
import Inputsearchhome from "./Inputsearchhome";
import axios from "axios";
import { useAuth } from "../../utils/AuthProvider";
import { CgProfile } from "react-icons/cg";

axios.defaults.withCredentials = true;
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const windowWidths = useSelector((state) => state.counter.windowwidth);
  const hamberg = useSelector((state) => state.counter.hamberg);
  const hambergexpander = useSelector((state) => state.counter.hambergexpander);
  const wishlistopen = useSelector((state) => state.counter.wishlistopen);
  const viewcart = useSelector((state) => state.counter.viewcart);
  const [hovered, Sethovered] = useState("");
  //setwishlistopen

  const dispatch = useDispatch();
  const { user,  setUser } = useAuth();
  console.log("current user", user);
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

  // ===============setwidth============

  useEffect(() => {
    const handleResize = () => {
      dispatch(setwindowwidth(window.innerWidth));
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   ==================hambergclode and open============

  useEffect(() => {
    if (windowWidths < 992) {
      dispatch(sethamberg(false));
    } else {
      dispatch(sethamberg(true));
    }
  }, [windowWidths]);

  const items = [
    {
      key: "1",
      label: <button onClick={logoutfunction}>Logout</button>,
    },
    {
      key: "2",
      label: <Link to={"/dashboard"}>Profile</Link>,
    },
    {
      key: "3",
      label: <Link to={"/changepassword"}>ChangePassword</Link>,
    },
  ];

  console.log(
    "windowwidth",
    windowWidths,
    "hamberg",
    hamberg,
    "hambergexpander",
    hambergexpander
  );

  function hambergwexpanderfunction() {
    dispatch(sethambergexpander(!hambergexpander));
  }

  const menuItems = (
    <Menu>
      <Menu.SubMenu
        title="Automobile & Motorbike"
        className={` border-none text-[17px] font-semibold 
          ${
            hovered === "Automobile & Motorbike"
              ? " bg-green-500 "
              : "bg-white "
          }
        ${hovered === "Automobile & Motorbike" ? "text-white  " : " text-black"}
        
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

  console.log("wishlistopen", wishlistopen);

  async function logoutfunction(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/api/logout`
      );
      console.log("Logout successful:", response);
      localStorage.removeItem("accessToken");
      setUser(null)
    } catch (err) {
      console.log("error", err);
    }
  }

  
  return (
    <>
      {/* Top Home */}

      {hamberg ? (
        <>
          <nav
            className={`fixed w-full top-0 left-0 z-50 bg-white shadow-md ${
              isScrolled ? "hidden" : "block"
            }`}
          >
            <div className="w-full flex justify-center">
              <div className="w-11/12  flex flex-col justify-between lg:flex-row py-1 ">
                <div className="w-[100%] sm:w-[80%] flex justify-between lg:w-[30%]">
                  <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                    <div className="pr-2 text-green-600 text-[16px]">
                      <FaPhone />
                    </div>
                    <div className=" text-[10px] lg:text-[14px]">
                      +9233122626227
                    </div>
                  </div>
                  <div className=" border-2  xl:mx-3 "></div>
                  <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                    <div className="pr-2 text-green-600 text-[16px]">
                      <IoMdMail />
                    </div>
                    <div className=" text-[10px] lg:text-[14px]">
                      Contact@madeinpak.com.pk
                    </div>
                  </div>
                </div>
                <div className="mt-4 w-[100%] sm:w-[85%] flex justify-between lg:w-[35%] lg:mt-0 py-2">
                  <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                    <div className="text-green-600 text-[16px]">
                      <MdTrackChanges />
                    </div>
                    <Link
                      to={"/trackrecord"}
                      className="pl-2 text-[10px] lg:text-[14px]"
                    >
                      Track Order
                    </Link>
                  </div>
                  <div className="border-2  xl:mr-0"></div>
                  <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                    <div className="pr-2 text-green-600 text-[16px]">
                      <FaSellsy />
                    </div>
                    <Link
                      to={"/seller/register"}
                      className=" text-[10px] lg:text-[14px]"
                    >
                      Become a Seller
                    </Link>
                  </div>
                  <div className="border-2 mr-2 xl:mr-0"></div>
                  {user && (
                    <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
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
                    </div>
                  )}
                  {!user && (
                    <div className=" flex items-center ">
                    <Link
                      to={"/register"}
                      className=" text-green-400 font-bold cursor-pointer"
                    >
                      Register
                    </Link>{" "}
                    <Link
                      to={"/login"}
                      className=" text-green-400 font-bold cursor-pointer mx-2"
                    >
                      Login
                    </Link>
                    <CgProfile className=" text-[23px]" />
                  </div>
                  )}
                    
                 
                </div>
              </div>
            </div>
          </nav>
          <div className=" mt-[60px] lg:mt-[50px] flex justify-center mb-4 lg:mb-0">
            <div className="w-full lg:w-11/12  flex justify-between items-center flex-col lg:flex-row">
              <div className="  w-2/12">
                <Link to={"/"}>
                  <img
                    src="../../../public/IMG-20240712-WA0094-removebg-preview.png"
                    className="h-[50px] lg:h-[100px] "
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="  w-6/12">
                <Inputsearchhome />
              </div>

              <div className=" w-1/12 flex justify-end">
                <Wishlist />

                <ViewCart />
              </div>
            </div>
          </div>

          <div className=" w-full ">
            <Navcomp />
          </div>

          <Navscrolldown />
        </>
      ) : (
        <>
          {/* ==========short width======== */}

          {!hambergexpander ? (
            <div className="fixed top-0 w-full z-50 bg-white  shadow-lg  flex justify-between p-3 text-[24px] text-green-600">
              <div>
                <div className=" w-1/12 flex text-[16px]">
                  <div className=" flex relative">
                    <Wishlist />
                    <ViewCart />
                  </div>
                </div>
              </div>
              <div>
                <GiHamburgerMenu
                  onClick={hambergwexpanderfunction}
                  className=""
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {hambergexpander ? (
            <div className=" pl-3 shadow-lg py-2 fixed top-0 bg-white w-full z-50">
              <div className=" font-bold text-green-600">Home</div>
              <div className=" my-2 font-bold text-green-600">About</div>
              <div className=" font-bold text-green-600">Product</div>
              <div className=" my-2 font-bold text-green-600">Contact</div>
              <div className="category cursor-pointer text-[16px] lg:text-[16px] border-white font-semibold border-b-[3px]  text-white  rounded-sm   ">
                <Space>
                  <Dropdown
                    overlay={menuItems}
                    overlayClassName="category-dropdown"
                    placement="bottom"
                  >
                    <button
                      className={`border-white text-[16px] lg:text-[16px] font-bold text-green-600  rounded-sm`}
                    >
                      Category
                    </button>
                  </Dropdown>
                </Space>
              </div>
              <div
                onClick={hambergwexpanderfunction}
                className=" font-extrabold text-green-600"
              >
                X
              </div>
            </div>
          ) : (
            ""
          )}

          {!hamberg ? (
            <>
              <div className="mt-[70px] ml-auto mr-auto w-11/12 mb-5 lg:w-7/12 flex justify-center homesearch lg:my-0 ">
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                  <Button
                    className=" py-4  flex justify-between h-[4vh] lg:h-[8vh]"
                    style={{
                      backgroundColor: "white",
                      borderColor: "#38A169",
                      color: "#38A169",
                      borderTopRightRadius: "1px",
                      borderBottomRightRadius: "1px",
                    }}
                  >
                    <div className=" text-[12px] lg:text-[16px] ">
                      Allcategory
                    </div>
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
                  className="border-[1px] border-green-600 py-4  w-7/12 pl-2 h-[4vh] lg:h-[8vh] text-[12px] lg:text-[16px]"
                  placeholder=" Search product here.."
                />
                <button className=" border-[1px]  w-2/12 border-green-600  bg-green-600 rounded-r-md text-white text-[12px] lg:text-[16px]">
                  Search
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Navbar;