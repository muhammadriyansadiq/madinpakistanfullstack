import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment,decrement } from './Counterslice.jsx';
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className=' ' >

      {count}
     
    </div>
  );
}

export default Counter;
