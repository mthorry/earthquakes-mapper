import React, { Component } from 'react';
import EarthquakesContainer from './Components/EarthquakesContainer'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <EarthquakesContainer />
      </div>
      </Router>
    );
  }
}

export default App;
