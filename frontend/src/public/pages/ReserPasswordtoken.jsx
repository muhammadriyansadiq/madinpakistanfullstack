import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useState } from "react";
import { FaSlack } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Forgetpassword = () => {
    const navigate = useNavigate()
const {token} = useParams()
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    token:token
  });
//   const [emailcheck, setemailcheck] = useState("");
  const [loading, setloading] = useState(false);
  async function handlesubmit(e) {
    setloading(true);
    e.preventDefault();
    console.log("submit");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/api/reset-password`,
        formData
      );
      console.log("reset successful:", response);
    //   setemailcheck("");
      setloading(false);
    //   alert("Link Successfully sent on your email");
    navigate('/login')
    } catch (err) {
      console.log("err", err.response.data.message);
    //   setemailcheck(err.response.data.message);
      setloading(false);
    }
  }

  return (
    <div className=" flex justify-center items-center h-[100vh] w-full">
      <form
        onSubmit={handlesubmit}
        className=" h-[35vh] rounded-lg w-11/12 shadow-lg border-[2px] flex flex-col px-2 justify-around"
      >
        <label htmlFor="newpassword" className="changeemail">
          Password
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          type="password"
          id="newpassword"
          placeholder=" Write your email"
          className=" pl-2 border-[1px] py-2 rounded-lg"
        />
        {/* {emailcheck ? (
          <div className=" text-red-400 text-center translate-y-[-12px]">
            {emailcheck}
          </div>
        ) : (
          ""
        )} */}
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
        {/* {emailcheck ? (
          <div className=" text-red-400 text-center translate-y-[-12px]">
            {emailcheck}
          </div>
        ) : (
          ""
        )} */}
        <button
          type="submit"
          className=" bg-green-500 py-1 text-white cursor-pointer rounded-lg"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Forgetpassword;
