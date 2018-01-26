import React, { Component } from 'react';
import vis from 'vis';
import logo from './logo.svg';
import './App.css';


class VIS extends Component {
  constructor(props) {
    super(props);
    this.renderTimeline = this.renderTimeline.bind(this);
  }

  componentDidMount() {
    this.renderTimeline();
  }

  renderTimeline() {
    var container = document.getElementById('VIS');
    const DATA = new vis.DataSet([
      {id: 1, content: 'item 1', start: '1000-04-20'},
      {id: 2, content: 'item 2', start: '1300-04-14'},
      {id: 3, content: 'item 3', start: '1500-04-18'},
      {id: 5, content: 'item 5', start: '1900-04-25'},
      {id: 6, content: 'item 6', start: '1700-04-27'},
      {id: 4, content: 'item 4', start: '2000-04-16', end: '2013-04-19'}
    ]);
    
    var options = {
      height: 250
    };
    var timeline = new vis.Timeline(container, DATA, options);
  }

  render() {
    return (
      <div id="VIS">
      </div>
    );
  }
}

export default VIS;
