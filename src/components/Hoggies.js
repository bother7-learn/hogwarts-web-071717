import React from 'react'
var HOGS = require('../porkers_data')

const Hoggies = (props) => {
  let piggy = HOGS.default.find((hog) => {return (hog.name === props.hogDetails)})
  return (<div>
    {props.hog.map(
      (hoggy) =>
      {
        let namestring = hoggy.split(" ").join("_").toLowerCase()
        let url = "http://localhost:3000/hog-imgs/" + namestring + ".jpg"
      if (hoggy !== props.hogDetails) {
      return (<div className="pigTile" key={hoggy} id={hoggy} onClick={props.clickPopup}> <img src={url}></img> <h3>{hoggy}</h3></div>)}
      else {
        return (<div className="pigTile" key={hoggy} id={hoggy} onClick={props.clickPopup}>
        <ul>
        <li>Name: {piggy.name}</li>
        <li>Specialty: {piggy.specialty} </li>
        <li>Greased: {piggy.greased}</li>
        <li>Weight: {piggy["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</li>
        <li>Highest Medal: {piggy["highest medal achieved"]}</li>
        </ul></div> )
      }
    })}
  </div>)
}

export default Hoggies
