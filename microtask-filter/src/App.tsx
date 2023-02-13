import React, { useState } from 'react';
import './App.css';
import { NewComponent } from './newCompanent';

function App() {
  type filterType = "all" | "dollar" | "ruble"
  //kastrula
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ]);

  //durshlag
  let currentMoney = money;

  const [filter, setFilter] = useState<filterType>('all')

  if (filter === 'dollar') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
  }

  if (filter === 'ruble') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
  }


  const onClickFliterHandler = (nameButton: filterType) => {
    setFilter(nameButton);
  }


  //tarelka

  return (
    <>
      <NewComponent currentMoney={currentMoney} />
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => onClickFliterHandler('all')}>ALL</button>
        <button onClick={() => onClickFliterHandler('ruble')}>RUBLES</button>
        <button onClick={() => onClickFliterHandler('dollar')}>DOLLARS</button>
      </div>
    </>

  );
}

export default App;
