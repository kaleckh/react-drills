import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({
              username:  event.target.value,
            });
          }}
        />
        <input
          onChange={ (event)=> {
            this.setState({
              password: event.target.value,
            });
          }}
        />
        <button onClick={()=>{
          alert(`username: ${this.state.username} - password: ${this.state.password}`)
        } }>login</button>
      </div>
    );
  }
}

export default App;
