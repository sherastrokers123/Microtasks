import React, { useState } from 'react';
import { TopCarsComponent } from './components/TopCarsComponents';

function App() {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
    <TopCarsComponent topCars={topCars} />
  );
}

export default App;