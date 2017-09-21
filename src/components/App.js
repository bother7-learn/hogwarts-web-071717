import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilteredHogList from './FilteredHogList'


var HOGS = require('../porkers_data')

class App extends Component {
  constructor (){
    super()

    this.state = {
      hog: [],
      selectedHog: [],
      filter: [],
      selectedFilter: "All",
      hogDetails: ""
    }
  }

  clickPopup = (event) => {
    (this.state.hogDetails === event.target.parentElement.id ) ? this.setState({hogDetails: ""}) : this.setState({hogDetails: event.target.parentElement.id})
  }

  componentDidMount = () => {
    this.setState({hog: HOGS.default.map((hog) => hog.name),
    selectedHog: HOGS.default.map((hog) => hog.name),
    filter: ["All", "Sort by Name", "Sort by Weight", "Greased"]
    })

  }

  updateFilter = (event) => {
    this.setState({selectedFilter: event.target.value})
    if (event.target.value === "All") {
      this.setState({selectedHog: this.state.hog})
    } else if (event.target.value === "Sort by Name") {
      this.setState({selectedHog: this.state.hog.sort()})
    } else if (event.target.value === "Sort by Weight") {
      var hogweights = {}
      HOGS.default.forEach((hog) => {
        hogweights[hog.name] = hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]})
        let keysSorted = Object.keys(hogweights).sort(function(a,b){return hogweights[a]-hogweights[b]})
        this.setState({selectedHog: keysSorted})
    } else if (event.target.value === "Greased") {
      var hoggreased = []
      HOGS.default.forEach((hog) => {
        if (hog.greased === true) {
          hoggreased.push(hog.name)
        }
      })
      this.setState({selectedHog: hoggreased})
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav />
          <FilteredHogList hogDetails={this.state.hogDetails} clickPopup={this.clickPopup} selectedFilter={this.state.selectedFilter} filter={this.state.filter} hog={this.state.selectedHog} updateFilter={this.updateFilter}/>
      </div>
    )
  }
}

export default App;
