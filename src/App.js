import React from 'react';
import Home from './home/home.js';
import Features from './features/features.js';
import About from './about/about.js';
import Testimonials from './testimonals/testimonials.js';
import Pricing from './pricing/pricing.js';

import Header from './header';
import Scroll from './scroll';
import './App.css';
import Change_opener from './change _opener/change.js';



function App() {
  return (
    <div className="App">
     <Change_opener/>
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
