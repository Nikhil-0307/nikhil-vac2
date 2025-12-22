import React, { useState, usestate } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  const handledecrement = () => {
    setCount(count - 1)
  };
  const handlereset = () =>{
    setCount(0);
  };
  const handleincrement = () => {
    setCount(count + 1)
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handledecrement}>-</button>
      <button onClick={handlereset}>Reset</button>
      <button onClick={handleincrement}>+</button>
    </div>
  )
  
};

export default UseState