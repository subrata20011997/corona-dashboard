import React from 'react';
import './App.css'
import MapIndia from './components/MapIndia';
import CardInfo from './components/CardInfo';
import NavBar from './components/NavBar';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardInfo />
      <div className="layout1">
        <MapIndia />
      </div>
      <LineChart />
    </div>
  );
}

export default App;
