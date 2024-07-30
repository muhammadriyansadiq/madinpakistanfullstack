import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Fourcarts from '../components/Fourcarts'
import "../../App.css"
const Checkout = () => {
  return (
    <div>
        <Navbar />
        <div className=' w-full flex justify-center bg-zinc-300 py-5'>
        <div className=' w-11/12'>

        <button>Home</button>
        <button className=' ml-8'>Checkout</button>
        </div>
    </div>
<div className=' w-full flex justify-center mt-10'>
<div className=' w-11/12 flex justify-between flex-col lg:flex-row'>
<div className='w-[100%] lg:w-[65%]'>
    <div className=' font-bold text-[22px]'>Make Your Checkout Here</div>
    <div>Please register in order to checkout more quickly</div>


    <form action="" className=' mt-4'>
        <div className=' w-full flex justify-between'>

    <div className=' w-[47%]'>
        <label htmlFor="firstname" className="required-field">firstname</label>
        <input  className=' w-full py-2 border-2 pl-2 rounded-lg' type="text" name="" id="firstname" required/>
    </div>
    <div className=' w-[47%]'>
        <label htmlFor="lastname" className="required-field">Lastname</label>
        <input className=' w-full py-2 border-2 pl-2 rounded-lg' type="text" name="" id="lastname" required/>
    </div>
        </div>

        <div className=' w-full flex justify-between mt-4'>

<div className=' w-[47%]'>
    <label htmlFor="email" className="required-field">Email</label>
    <input  className='rounded-lg w-full py-2 border-2 pl-2' type="text" name="" id="email" required/>
</div>
<div className=' w-[47%]'>
    <label htmlFor="phone" className="required-field">Phonenumber</label>
    <input className='rounded-lg w-full py-2 border-2 pl-2' type="number" name="" id="phone" required/>
</div>
    </div>


    <div className=' w-full flex justify-between mt-4'>

<div className=' w-[47%]'>
    <label htmlFor="Country" className="required-field">Country</label>
    <input  className=' w-full py-2 border-2 pl-2' type="text" name="" id="Country" required/>
</div>
<div className=' w-[47%]'>
    <label htmlFor="AddressLine" className="required-field">AddressLine 1</label>
    <input className=' w-full py-2 border-2 pl-2' type="text" name="" id="AddressLine" required/>
</div>
    </div>


    <div className=' w-full flex justify-between mt-4'>

<div className=' w-[47%]'>
    <label htmlFor="AddressLine 2" >AddressLine 2</label>
    <input  className='rounded-lg w-full py-2 border-2 pl-2' type="text" name="" id="AddressLine 2" required/>
</div>
<div className=' w-[47%]'>
    <label htmlFor="Postal" >Postal Code</label>
    <input className='rounded-lg w-full py-2 border-2 pl-2' type="text" name="" id="Postal" required/>
</div>
    </div>
</form>
</div>
<div className='w-[100%] mt-5 lg:w-[32%] px-3 border-2 py-4 rounded-lg lg:mt-0'>
<div className=''>
    <div>Cart Totals</div>
    <div className=' w-[39px] h-[2px] bg-green-600 ml-1'></div>
</div>

<div className=' flex justify-between my-4'>
    <div>Cart SubTotal</div>
    <div>Rs.0</div>
</div>

<div className=' flex justify-between'>
    <div>Shipping Cost</div>
    <div>Free</div>
</div>

<div className='  my-5'>
    <hr />
</div>

<div className=' flex justify-between'>
    <div>Total</div>
    <div>Rs.0</div>
</div>

<div className='my-5'>
    <div>Payments</div>
    <div className=' w-[39px] h-[2px] bg-green-600 ml-1'></div>
</div>


<div className=' '>
<input type="radio" id="html" className=' cursor-pointer' checked name="fav_language" value="HTML" />
  <label for="html" className=' ml-3 cursor-pointer'>Cash on Delivery</label>
</div>

<div className=' flex justify-center mt-5'>
    <button className=' bg-green-600 py-3 px-24 rounded-lg text-white'>Place Order</button>
</div>
</div>
</div>
</div>

<Fourcarts />
        <Footer />
    </div>
  )
}

export default Checkout