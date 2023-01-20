import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [number, setNumber] = useState(1)

  const onClickHandler = () => {
    setNumber(number++);
    console.log(number);
  }

  const resetCounter = () => {
    setNumber(number = 0)
  }

  return (
    <div className='App'>
      <h1>{number}</h1>
      <button onClick={onClickHandler}>Counter Number</button>
      <button onClick={resetCounter}>Reset</button>
    </div>

  )
}

export default App;
