import React from 'react';
import reddit from "../redditapi.js";
import Dropdown from "./dropDown.jsx";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            term: '',
            limit: 25,
            sortBy: "",
            subreddit: '',

        }
    }


  render() {
      return (
      <div>
        <div className="header">Header</div>
        <Dropdown term={this.state.term} 
        limit={this.state.limit} 
        sortBy={this.state.sortBy}
        subreddit = {this.state.sortBy}/>

        <div className="search-box">
          <h3>Search Reddit</h3>
          <button className="search-this" 
          onClick={() => reddit.search(this.state.term, this.state.limit, this.state.sortBy)}>Button1</button>
        <button className="search-this" onClick={() => reddit.subredditSearch(this.state.term)}>Button2</button>

          <form className="search-form"></form>
          <input type="text" className="search-input" placeholder="search..." />
        </div>

      </div>
      )
  }
}