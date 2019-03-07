import React from 'react';

export default function Form(props) {
    return (
        <div className="search-box">
        <h3>Search Reddit</h3>
        <button className="search-this" >Button1</button>
      <button className="search-this">Button2</button>

        <form className="search-form" handleFormChange = {(e) => props.handleFormChange(e)}></form>
        <input type="text" className="search-input" placeholder="search..." />
      </div>
    )
}