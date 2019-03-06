import React from 'react';

export default Dropdown = () => {
    return (
    <div className="dropdown">
      <button className="dropDown-btn">Dropdown</button>
        <div className="dropdown-list">
          <a href="#">5</a>
          <a href="#">10</a>
          <a href="#">15</a>
          <a href="#">25</a>
          <a href="#">50</a>
          <a href="#">100</a>
        </div>
    </div>
    )
}