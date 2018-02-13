import React, { Component } from 'react';
import '../App.css';
import worlddata from '../data/world';
import { line } from 'd3';

class TimeLine extends Component {
    render() {
        const data = [
            {date: new Date(2007, 3, 24)},
            {date: new Date(2007, 3, 25)},
            {date: new Date(2007, 3, 26)},
            {date: new Date(2007, 3, 27)}
        ];
        const lines = line().x((d) => { x(d.date)});

        return (
            <svg>
                {line}
            </svg>
        );  
    }


}


export default TimeLine;