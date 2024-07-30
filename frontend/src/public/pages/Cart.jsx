import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fourcarts from "../components/Fourcarts";
import Subscribed from "../components/Subscribed";

const Cart = () => {
  const [cartdata, useCartdata] = useState([]);
  return (
    <div>
      <Navbar />
      <div className=" w-full flex justify-center bg-zinc-400 py-5">
        <div className=" w-11/12">
          <button>Home</button>
          <button className=" ml-8">Cart</button>
        </div>
      </div>
      <div className=" w-fulll flex justify-center">
        <div className=" w-11/12 ">
          <div className=" w-full overflow-auto">
            <table className=" w-full overflow-auto">
              <thead className=" w-full  text-[10px] lg:text-[16px]">
                <th className=" border-[1px] py-2 ">Product </th>
                <th className=" border-[1px]">Name</th>
                <th className=" border-[1px]">Unit Price</th>
                <th className=" border-[1px]">Quantity</th>
                <th className=" border-[1px]">Total</th>
                <th className=" border-[1px]">Delete</th>
              </thead>

              <tbody className=" w-full">
                {cartdata.length > 0 ? (
                  <tr className=" w-full text-[10px] lg:text-[16px] ">
                    <td className=" border-[1px] text-center py-2">1</td>
                    <td className=" border-[1px] text-center">2</td>
                    <td className=" border-[1px] text-center">3</td>
                    <td className=" border-[1px] text-center">4</td>
                    <td className=" border-[1px] text-center">5</td>
                    <td className=" border-[1px] text-center">6</td>
                  </tr>
                ) : (
                  <tr className=" w-full text-[10px] lg:text-[16px] ">
                    <td colSpan={6} className=" border-[1px] text-center py-7">
                      There are no products available in cart. Continue shopping
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center">
        <div className=" w-11/12 flex justify-between mt-4 flex-col lg:flex-row">
          <div className=" flex w-full lg:w-3/12 ">
            <input
              type="text"
              className="w-11/12 border-[1px] rounded-l-lg pl-2 h-[50px] lg:w-full"
              placeholder=" Enter Your Coupon"
            />
            <button className=" p-3 bg-green-600 rounded-r-lg text-white h-[50px]">
              Apply
            </button>
          </div>
          <div className="w-full lg:w-3/12 mt-10 lg:mt-0">
            <div className=" flex justify-between">
              <div>Cart Subtotal</div>
              <div>Rs.0</div>
            </div>

            <div className=" my-2">
              <hr />
            </div>

            <div className=" flex justify-between">
              <div>Cart Subtotal</div>
              <div>Rs.0</div>
            </div>

            <div className=" my-2 bg-green-600 p-2 rounded-lg text-white text-center">
              <button className="">CheckOut</button>
            </div>

            <div className=" my-2 bg-green-600 p-2 rounded-lg text-white text-center">
              <button>ContinueShopping</button>
            </div>
          </div>
        </div>
      </div>

      <Fourcarts />
      <Subscribed />
      <div className="my-3 lg:my-6">
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder=" Your email address"
            className="border-[1px] w-7/12 lg:w-4/12 py-4 rounded-l-md"
          />
          <button className="bg-green-600 px-6 text-white rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;


let d = "riyan"
// nayir
let g = d.split("")
g.forEach((data,ind)=>{

console.log(g[ind])

})
