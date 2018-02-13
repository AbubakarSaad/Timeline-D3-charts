import React, { Component } from 'react';
import '../App.css';
import worlddata from '../data/world';
import { geoMercator, geoPath } from 'd3';

class WorldMap extends Component {

    render() {
        const projection = geoMercator();
        const pathGenerator = geoPath().projection(projection);
        const countries = worlddata.features
        .map((d, i) => <path 
            key={'path' + i}
            d={pathGenerator(d)}
            className='countries'
        />)

        return (
            <svg style={styles.worldmap}>
                {countries}
            </svg>
        )
    }
}


const styles = {
    worldmap: {
        width: '100%',
        height: '1000px'
    }
}


export default WorldMap;
