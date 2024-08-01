import { useState } from 'react'
import Counter from './redux/Counter'
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Adminhome from './admin/pages/Adminhome';
import './App.css'
import AdminBanner from './admin/pages/AdminBanner';
import Adminbanneridedit from './admin/pages/Adminbanneridedit';
import Adminbannercreate from './admin/pages/Adminbannercreate';
import AdminCategory from './admin/pages/AdminCategory';
import Admincategorycreate from './admin/pages/Admincategorycreate';
import Admincategoryidedit from './admin/pages/Admincategoryidedit';
import Adminproduct from './admin/pages/ADminproduct';
import Adminproductcreate from './admin/pages/Adminproductcreate';
import Adminproductidedit from './admin/pages/Adminproductidedit';
import Adminbrand from './admin/pages/AdminBrand';
import Adminbrandcreate from './admin/pages/Adminbrandcreate';
import Adminbrandedit from './admin/pages/Adminbrandedit';
import Adminshipping from './admin/pages/Adminshipping';
import Adminshippingcreate from './admin/pages/Adminshippingcreate';
import Adminshippingidedit from './admin/pages/Adminshippingidedit';
import Adminorder from './admin/pages/Adminorder';
import Adminorderid from './admin/pages/Adminorderid';
import Adminorderidedit from './admin/pages/Adminorderidedit';
import Adminreview from './admin/pages/Adminreview';
import Adminpost from './admin/pages/Adminpost';
import Adminpostcreate from './admin/pages/Adminpostcreate';
import Adminpostcategory from './admin/pages/Adminpostcategory';
import Adminpostcategorycreate from './admin/pages/Adminpostcategorycreate';
import Adminposttag from './admin/pages/Adminposttag';
import Adminposttagcreate from './admin/pages/Adminposttagcreate';
import Admincomment from './admin/pages/Admincomment';
import Admincoupon from './admin/pages/Admincoupon';
import Admincouponcreate from './admin/pages/Admincouponcreate';
import Admincouponidedit from './admin/pages/Admincouponidedit';
import Adminuser from './admin/pages/Adminuser';
import Adminusercreate from './admin/pages/Adminusercreate';
import Adminuseridedit from './admin/pages/adminuseredit';
import Adminsetting from './admin/pages/Adminsetting';
import Adminpostidedit from './admin/pages/Adminpostidedit';
import Adminpostcategoryidedit from './admin/pages/Adminpostcategoryidedit';
import Adminposttagidedit from './admin/pages/Adminposttagidedit';
import Home from './public/pages/Home';
import Aboutus from './public/pages/Aboutus';
import Contactus from './public/pages/Contactus';
import Products from './public/pages/Products';
import Register from './public/pages/Register';
import Login from './public/pages/Login';
import Cart from './public/pages/Cart';
import Checkout from './public/pages/Checkout';
import Dashboard from './public/pages/Dashboard';
import ProductCategory from './public/pages/ProductCategory';
import Productscategorydetails from './public/pages/Productscategorydetails';
import Sellerregister from './public/pages/Sellerregister';
import Sellerlogin from './public/pages/Sellerlogin';
import Trackrecord from './public/pages/Trackrecord';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={< Home/>} />
  <Route path='/homedashboard' element={< Adminhome/>} />
  <Route path="/contact" element={<Contactus/>} />
  <Route path="/admin/banner" element={<AdminBanner />} />
  <Route path="/admin/banner/create" element={<Adminbannercreate/>} />
  <Route path='/admin/banner/:id' element={< Adminbanneridedit/>} />
  <Route path='/category' element={< AdminCategory/>} />
  <Route path='/admin/product' element={< Adminproduct/>} />
  <Route path='/admin/brand' element={< Adminbrand/>} />
  <Route path='/admin/brand/create' element={< Adminbrandcreate/>} />
  <Route path='/admin/brand/:id' element={< Adminbrandedit/>} />
  <Route path='/admin/category/create' element={< Admincategorycreate/>} />
  <Route path='/admin/category/:id' element={< Admincategoryidedit/>} />
  <Route path='/admin/product/create' element={< Adminproductcreate/>} />
  <Route path='/admin/product/id/edit' element={< Adminproductidedit/>} />
  <Route path='/admin/shipping' element={< Adminshipping/>} />
  <Route path='/admin/shipping/create' element={< Adminshippingcreate/>} />
  <Route path='/admin/shipping/:id' element={< Adminshippingidedit/>} />
  <Route path='/admin/order' element={< Adminorder/>} />
  <Route path='/admin/order/id' element={< Adminorderid/>} />
  <Route path='/admin/order/id/edit' element={< Adminorderidedit/>} />

  <Route path='/admin/review' element={< Adminreview/>} />
  <Route path='/admin/post' element={< Adminpost/>} />
  <Route path='/admin/post/id/edit' element={< Adminpostidedit/>} />

  <Route path='/admin/post/create' element={< Adminpostcreate/>} />
  <Route path='/admin/post/category' element={< Adminpostcategory/>} />
  <Route path='/admin/post/category/id/edit' element={< Adminpostcategoryidedit/>} />

  <Route path='/admin/post/category/create' element={< Adminpostcategorycreate/>} />
  <Route path='/admin/posttag' element={< Adminposttag/>} />
  <Route path='/admin/posttag/id/edit' element={< Adminposttagidedit/>} />

  <Route path='/admin/posttag/create' element={< Adminposttagcreate/>} />
  <Route path='/admin/postcomment' element={< Admincomment/>} />
  <Route path='/admin/coupon' element={< Admincoupon/>} />
  <Route path='/admin/coupon/create' element={< Admincouponcreate/>} />
  <Route path='/admin/coupon/id/edit' element={< Admincouponidedit/>} />
  <Route path='/admin/user' element={< Adminuser/>} />
  <Route path='/admin/user/create' element={< Adminusercreate/>} />
  <Route path='/admin/user/id/edit' element={< Adminuseridedit/>} />
  <Route path='/admin/setting' element={< Adminsetting/>} />

{/* ======================public pages============= */}

<Route path='/aboutus' element={< Aboutus/>} />
<Route path='/contactus' element={<Contactus />} />
<Route path='/product' element={<Products />} />
<Route path='/register' element={<Register />} />
<Route path='/login' element={<Login />} />
<Route path='/cart' element={<Cart />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/dashboard' element={<Dashboard />} />
<Route path='/products/:category' element={<ProductCategory />} />
<Route path='/products/category/items' element={<Productscategorydetails />} />
<Route path='/seller/register' element={<Sellerregister />} />
<Route path='/seller/login' element={<Sellerlogin />} />
<Route path='/trackrecord' element={<Trackrecord />} />

{/* /products/category/mobileaccessories */}

  </Routes>
  </BrowserRouter>  

    </>
  )
}

export default App
