import React, { Component } from "react";

class NewTask extends Component {
  render() {
    return (
      <input
        onChange={(event) => {
          this.props.onChange(event)
        }}
        value={this.props.toDo}
        type="text"
      />

    );
  }
}

export default NewTask