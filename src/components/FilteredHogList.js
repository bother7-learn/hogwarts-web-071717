import React from 'react'
import Hoggies from './Hoggies'
import Filter from './Filter'

const FilteredHogList = (props) => {
  // debugger
  return (<div><Filter filter={props.filter} updateFilter={props.updateFilter}/> <Hoggies clickPopup={props.clickPopup} hogDetails={props.hogDetails} selectedFilter={props.selectedFilter} hog={props.hog} />  </div>)
}



export default FilteredHogList
