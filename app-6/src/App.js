import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDo: "",
      toDoList: [],
    };
  }
  render() {
    return (
      <div>
        <div>my to do list</div>
        <input
          onChange={(event) => {
            this.setState({
              toDo: event.target.value,
            });
          }}
          value={this.state.toDo}
          type="text"
        />
        <button
          onClick={(event) => {
            let list = this.state.toDoList;
            list.push(this.state.toDo);
            this.setState({
              toDoList: list,
              toDo: "",
            });
          }}
        >
          add
        </button>
        <div>
          {this.state.toDoList.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
