import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useState } from "react";
import { FaSlack } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthProvider";
const ChangePAssword = () => {
    const navigate = useNavigate()
// const {token} = useParams()
const [authErr, setAuthErr] = useState("");

  const [formData, setFormData] = useState({
    currentPassword:"",
     password:"",
      confirmPassword:""
  });
//   const { user } = useAuth();
  const [loading, setloading] = useState(false);
  async function handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    console.log("submit");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/api/change-password`,
        formData
      );
      console.log("change successful:", response);
      setloading(false);
   setAuthErr("")
   setFormData({ currentPassword:"",
    password:"",
     confirmPassword:""});
     alert("password updated successfully")
     navigate("/login");

    } catch (err) {
      console.log("err", err.response.data.message);
      setloading(false);
      setAuthErr(err.response.data.message)

    }
  }
//   console.log(user._id,"setuser")

  return (
    <>
   
    <div className=" flex justify-center items-center flex-col h-[100vh] w-full">
    <h1 className=" font-bold ">Change Your  Password</h1>
      <form
        onSubmit={handlesubmit}
        className=" h-4/6 rounded-lg w-11/12 shadow-lg border-[2px] flex flex-col px-2 justify-around"
      >
        <label htmlFor="currentpassword" className="changeemail">
        currentPassword
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
          type="password"
          id="currentpassword"
          placeholder=" Write your email"
          className=" pl-2 border-[1px] py-2 rounded-lg"
        />
        {authErr === "Current password is incorrect"?
        <div className="leading-[0px] text-red-400 text-center translate-y-[-4px]">{authErr}</div>
 :""   }
        <label htmlFor="password" className="changeemail">
          ConfirmPassword
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          type="password"
          id="password"
          placeholder=" Write your email"
          className=" pl-2 border-[1px] py-2 rounded-lg"
        />
{authErr === "Internal server error"?
        <div className="leading-[0px] text-red-400 text-center translate-y-[-4px]">Confirm Password is Required</div>
:""}
<label htmlFor="confirmpassword" className="changeemail">
          ConfirmPassword
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          type="password"
          id="confirmpassword"
          placeholder=" Write your email"
          className=" pl-2 border-[1px] py-2 rounded-lg"
        />
        {authErr === "New passwords do not match"?
                <div className="leading-[0px] text-red-400 text-center translate-y-[-4px]">{authErr}</div>
       :""     }
       <div className=" flex justify-center">

       
        <button
          type="submit"
          className=" bg-green-500 py-1 px-2 text-white cursor-pointer rounded-lg"
        >
          {loading ? "Loading..." : "Change Password"}
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ChangePAssword;
