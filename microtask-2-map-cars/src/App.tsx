import React, { useState } from 'react';

import { TopCarsComponents } from './components/TopCarsComponents';

function App() {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
    <TopCarsComponents topCars={topCars} />
  );
}

export default App;