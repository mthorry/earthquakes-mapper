import React, { Component } from 'react';


class EarthquakesForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onFilter(event)
  }

  render() {
    return(
      <div>
        <h3>Filter Earthquakes:</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="filter-column">Minimum Magnitude</label>
          <br/>
          <select name="magnitude">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        <br/>
        <br/>
          <label className="filter-column">Date Range:</label><br/>
          <input type="date" name="min" /><br/>
          <input type="date" name="max" /><br/>
          <br/>
        <input type="submit" className="myButton"/>
      </form>
      </div>
    )
  }
}

export default EarthquakesForm