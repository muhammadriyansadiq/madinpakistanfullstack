// import React from 'react'
// import Slidermodals from './Slidermodals'
// import { Button, Modal } from 'antd';

// const Modals = () => {
//     const [open, setOpen] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const showLoading = () => {
//       setOpen(true);
//       setLoading(true);
  
//       // Simple loading mock. You should add cleanup logic in real world.
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000);
//     };
  
//   return (
//     <div>
//          <Modal
//       className='allproducts '
//       style={{
//         top: 20,
//       }}
//         loading={loading}
//         open={open}
//         onCancel={() => setOpen(false)}
//       >
//         <div className='  w-full flex justify-between  h-full lg:h-[80vh] flex-col lg:flex-row lg:justify-around'>
//           <div className='w-[88%] lg:w-[48%] order-2 lg:order-1 mt-5 lg:mt-0'>
//             <Slidermodals />
//           </div>
//           <div className='w-[88%] border-[2px] pl-2 py-3 lg:py-0 lg:mt-0 lg:w-[45%] flex flex-col justify-around mt-4 order-1 lg:order-2 text-[22px] font-serif '>
//             <div>Linear Roller Colour Pen - 6Pcs
//             </div>
//             <div className=' mt-3'>rating</div>
//             <div className=' my-3'>Rs.699
//             </div>
//             <div>SKU: BM059</div>
//             <div className=' flex items-center mt-3'>
//               <div className=' flex text-[14px] items-center'>
//                 <button className=' bg-green-600 h-[20px] w-[20px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< IoIosAddCircleOutline/></button>
//                 <div className=' mx-2'>1</div>
//                 <button className=' bg-green-600 h-[20px] w-[20px] flex justify-center items-center rounded-full text-white font-extrabold text-[22px]'>< GrSubtractCircle/></button>
//               </div>
//               <div className=' mx-2 text-[14px]'><button className=' bg-green-600 p-1 rounded-lg text-white cursor-pointer'>Add To Cart</button></div>
//               <div className=' text-[22px]'><FaRegHeart /></div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export default Modals