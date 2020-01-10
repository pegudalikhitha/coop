import React from 'react';
import Home from './home/home.js';
import Features from './features/features.js';
import About from './about/about.js';
import Testimonals from './testimonals/testimonals.js';
import Pricing from './pricing/pricing.js';
import Footer from './footer/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <div> */}
      <Home />
      <Features />
      <About />
      <Testimonals/>
      <Pricing/>
      <Footer/>
      {/* </div>   */}
    </div>
  );
}

export default App;
