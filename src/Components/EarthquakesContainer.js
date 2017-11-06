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
        <h1>🌐 Earthquake Mapper</h1>
        <div className="wrapper">
          <EarthquakesForm onFilter={this.onFilter}/>
          <Route path="/" render={(props) => <EarthquakesMap google={this.props.google} quakes={this.state.quakes} {...props}/>}/>
        </div>
        <br/>
        <p><strong>This app was created with ❤️ by me, Matthew Thorry.</strong> Checkout the <a href="https://github.com/mthorry/earthquakes-mapper" target="_blank" rel="noopener noreferrer">GitHub repo</a>, my <a href="https://medium.com/front-end-hacking/using-the-google-maps-javascript-api-in-a-react-project-b3ed734375c6" target="_blank" rel="noopener noreferrer">blog post</a> about this, or my <a href="https://www.linkedin.com/in/mthorry/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  libraries: ['visualization']
})(EarthquakesContainer)
