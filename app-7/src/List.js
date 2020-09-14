import React from "react";

function List({ toDoList }) {
  return (
    <div>
      {toDoList.map((item) => {
        return <div> {item} </div>;
      })}
    </div>
  );
}

export default List;
