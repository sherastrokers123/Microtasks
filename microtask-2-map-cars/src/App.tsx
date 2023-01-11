import React, { useState } from 'react';
import { TopCarsComponent } from './components/TopCarsComponents';


function App() {
  const topCars = [
    { key: 1, manufacturer: 'BMW', model: 'm5cs', },
    { key: 2, manufacturer: 'Mercedes', model: 'e63s' },
    { key: 3, manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
    <TopCarsComponent topCars={topCars} />
  );
}

export default App;