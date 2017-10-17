export function fetchQuakes() {
  let currentDay = new Date();
  let previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 1)

  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${previousMonth.toDateString()}&endtime=${currentDay.toDateString()}&minmagnitude=5`)
    .then((res) => res.json())
}

export function searchQuakes(event) {
    const magnitude = event.target.magnitude.value
    const minDate = event.target.min.value
    const maxDate = event.target.max.value
  return fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${minDate}&endtime=${maxDate}&minmagnitude=${magnitude}`)
    .then((res) => res.json())
}