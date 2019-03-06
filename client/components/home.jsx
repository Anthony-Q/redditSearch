import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: ''
        }
    }
  render() {
      return (
      <div>
        <div className="header">Header</div>

        <div className="search-box">
          <h3>Search Reddit</h3>
          <form className="search-form"></form>
          <input type="text" className="search-input" placeholder="search..." />
        </div>
        
      </div>
      )
  }
}