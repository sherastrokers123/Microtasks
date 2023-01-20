import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonComponent } from './components/Button';

function App() {
  // callback function
  const ButtonFoo1 = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  }

  const ButtonFoo2 = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  }

  const StupidFoo = (message: string) => {
    console.log('IM Stupid Button');
  }
  // callback function


  return (
    <div>
      <ButtonComponent name={'YouTubeChanel-1'} callBack={() => ButtonFoo1('Alisher', 21)} />
      <ButtonComponent name={'YouTubeChanel-2'} callBack={() => ButtonFoo2('Lisa', 12)} />
      <ButtonComponent name={'Stupid Button'} callBack={() => StupidFoo('stupid button')} />
    </div >

  )
}

export default App;
