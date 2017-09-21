import React from 'react'


const Filter = (props) => {
  return (<select className="filterWrapper" onChange={props.updateFilter}>
  {props.filter.map((filteroonie) => <option value={filteroonie} key={filteroonie}>{filteroonie}</option>)}
  </select>)
}

export default Filter
