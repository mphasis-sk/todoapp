import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, handleShow } = this.props;

    return (
      <ul className="list-group my-5">
        {/* looping through all elements in items */}
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id} //key for rendering list
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleshow={() => handleShow(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
