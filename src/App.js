import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Worldmap from './worldmapd3';


class App extends Component {

  render() {
    return (
      <div id="App">
        <Worldmap />
      </div>
    );
  }
}

export default App;
