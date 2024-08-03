import React from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useState } from 'react';
import { FaSlack } from 'react-icons/fa6';
const Forgetpassword = () => {
    const [formData, setFormData] = useState({
        email: '',
       
      });
      const [emailcheck,setemailcheck] = useState("")
const [loading,setloading] = useState(false)
    async function handlesubmit(e){
        setloading(true)
e.preventDefault()
console.log("submit")
try{
    const response = await axios.post(`${import.meta.env.VITE_API_KEY}/api/request-password-reset`, formData);
    console.log('Login successful:', response);
    setemailcheck("")
    setloading(false)
    alert("Link Successfully sent on your email")
}
catch(err){
console.log("err",err.response.data.message)
setemailcheck(err.response.data.message)
setloading(false)
}
    }


  return (

    <div className=' flex justify-center items-center h-[100vh] w-full'>

        <form onSubmit={handlesubmit} className=' h-[35vh] rounded-lg w-11/12 shadow-lg border-[2px] flex flex-col px-2 justify-around'>
<label htmlFor="email" className='changeemail'>ChangePassword</label>
<input
onChange={(e) => setFormData({ ...formData, email: e.target.value })}

type="email" id='email' placeholder=' Write your email' className=' pl-2 border-[1px] py-2 rounded-lg' />
{emailcheck?
<div className=' text-red-400 text-center translate-y-[-12px]'>{emailcheck}</div>
:""
}
<button type='submit' className=' bg-green-500 py-1 text-white cursor-pointer rounded-lg'>
    {loading?"Loading..."
:"Submit"
}
    </button>
        </form>


    </div>

  )
}

export default Forgetpassword