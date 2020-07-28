import React from 'react';

import Menu from './components/Menu';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
			<Carousel/>
			<Footer/>			
    </div>
  );
}

export default App;
