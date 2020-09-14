import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userInput: "" 
        }
      }
    render() {
    return (
        <div>
        <input onChange={
           (event) => this.setState({
               userInput: event.target.value 
           }) 
        }/>
        <div>{this.state.userInput}</div>
    
        </div>
      );
  }
}

export default App;
