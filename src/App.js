import React from 'react';
import Home from './home/home.js';
import Features from './features/features.js';
import About from './about/about.js';
import Testimonials from './testimonals/testimonials.js';
import Pricing from './pricing/pricing.js';

import Header from './header';
import Scroll from './scroll';
import './App.css';



function App() {
  return (
    <div className="App">
     
       <Scroll/>
      <Header/>
      <Home/>
      <Features/>
      <About/>
      <Testimonials/>
      <Pricing/>
     
      
    </div>
  );
}

export default App;
