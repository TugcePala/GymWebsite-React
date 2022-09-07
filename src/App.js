import React  from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';



import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Feature></Feature>
      <Offer></Offer>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
