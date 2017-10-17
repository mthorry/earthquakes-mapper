import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import EarthquakesForm from './EarthquakesForm'
import EarthquakesMap from './EarthquakesMap'
import { fetchQuakes } from '../Services/earthquakes'
import { searchQuakes } from '../Services/earthquakes'
import { GoogleApiWrapper } from 'google-maps-react'

class EarthquakesContainer extends Component {

  state = {
    quakes: []
  }

  componentDidMount = () => {
    fetchQuakes()
      .then((json) => {
        this.setState({ quakes: json.features }, )
      })
  }

  onFilter = (event) => {
    searchQuakes(event)
      .then((json) => {
        this.setState({ quakes: json.features })
      })
  }

  render() {
    return (
      <div className="EarthquakesContainer">
        <h1>Earthquake Finder</h1>
        <div className="wrapper">
          <EarthquakesForm onFilter={this.onFilter}/>
          <Route path="/" render={(props) => <EarthquakesMap google={this.props.google} quakes={this.state.quakes} {...props}/>}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(EarthquakesContainer)
