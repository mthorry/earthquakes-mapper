import React, { Component } from 'react';
import EarthquakesItem from './EarthquakesItem'


class EarthquakesList extends Component {

  render() {
    const quakeItems = this.props.quakes.map((quake) => {
    return <EarthquakesItem key={quake.id} quake={quake}/>
    })

    return (
      <ul className="EarthquakesList">
        {quakeItems}
      </ul>
    );
  }
}

export default EarthquakesList;