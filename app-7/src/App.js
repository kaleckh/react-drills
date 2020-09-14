import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import NewTask from "./NewTask";

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
        <NewTask
          onChange={(event) =>
            this.setState({
              toDo: event.target.value,
            })
          }
          toDo={this.state.toDo}
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
        <List toDoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
