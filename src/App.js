import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Worldmap from './components/worldmapd3';
import TimeLine from './components/TimeLine';


class App extends Component {

  render() {
    return (
      <div id="App">
        {/* <Worldmap /> */}
        <TimeLine />
      </div>
    );
  }
}

export default App;
