import React from 'react';
import {searchreddit} from "../redditapi.js";
import Dropdown from "./dropDown.jsx";
import Form from "./form.jsx";
require("../index.scss");

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            term: '',
            limit: 25,
            sortBy: "",
            subreddit: '',
            list: [],
            time: '',
        }
        this.handleLimit = this.handleLimit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
      searchreddit(this.state.term, this.state.limit, this.state.sortBy)
      .then( results => {
        console.log(results);
      }) 
      
    }

    handleLimit(e) {
      e.persist();
      this.setState( prevState => {
        return { limit: e.target.innerHTML}
      }, () => {
        console.log("limit", this.state.limit);
      })
  }

   handleFormChange(e) {
     console.log("term", e.target.value);
     this.setState( prevState => {
       return { term: e.target.value }
     })
   }

   handleSubmit(apiData) {
     this.setState( prevState => {
       let newState = prevState.list;
       newState.push(apiData)
       return { list: newState }
     })
   }



   


  render() {
      return (
      <div>
        <div className="header">Header</div>
        <Dropdown 
        handleLimit={this.handleLimit}
        term={this.state.term} 
        limit={this.state.limit} 
        sortBy={this.state.sortBy}
        subreddit = {this.state.sortBy}/>

       <Form 
       handleFormChange = {this.handleFormChange}
       handleSubmit = {this.handleSubmit}/>

      </div>
      )
  }
}