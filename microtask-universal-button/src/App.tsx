import React from 'react';
import './App.css';
import { ButtonComponent } from './components/UniversalButton';

function App() {

  const btnFoo = (user: string, age: number, hardSkill: string) => {
    console.log("Raiting" + ":" + user, age, hardSkill)
  }

  return (
    <div>
      <ButtonComponent name={"Coder Rainting"} callBack={() => btnFoo('Alisher', 2, "HTML,CSS,JS,React")} />
    </div>
  )
}

export default App;