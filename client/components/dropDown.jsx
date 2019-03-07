import React from 'react';

export default function Dropdown(props)  {
    return (
    <div className="dropdown">
      <button className="dropbtn">Number of Items</button>
        <div className="dropdown-content" >
          <a href="#" onClick={e => props.handleLimit(e)} >5</a>
          <a href="#" onClick={e => props.handleLimit(e)}>10</a>
          <a href="#" onClick={e => props.handleLimit(e)}>15</a>
          <a href="#" onClick={e => props.handleLimit(e)}>25</a>
          <a href="#" onClick={e => props.handleLimit(e)}>50</a>
          <a href="#" onClick={e => props.handleLimit(e)}>100</a>
        </div>
    </div>
    )
}