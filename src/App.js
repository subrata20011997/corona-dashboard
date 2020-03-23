import React from 'react';
import './App.css'
import MapIndia from './components/MapIndia';
import CardInfo from './components/CardInfo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardInfo />
      <div className="layout1">
        <MapIndia />
      </div>
    </div>
  );
}

export default App;
