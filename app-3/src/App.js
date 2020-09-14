import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      arr: ["kale", "michael", "hamm"]
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({
              userInput: event.target.value,  
            });
          }}
        />
        
        {this.state.arr.filter(element => {
          return element.includes(this.state.userInput)
        }).map((element) => {
          return (
            <div>
              <h2>{element}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;



array.filter(element => {...})
array.find()
array.map()


express app