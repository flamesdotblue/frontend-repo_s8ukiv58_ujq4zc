import React from 'react';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Achievements from './components/Achievements';
import Explore from './components/Explore';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <TrustedBrands />
      <Achievements />
      <Explore />
    </div>
  );
}

export default App;
