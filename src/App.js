import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TeamOmegaHeader from "./components/common/TeamOmegaHeader";
import TeamOmegaModalPopup from "./components/common/TeamOmegaModalPopup";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  getTime() {
    let d = new Date().getTime();
    return d;
  }
  //1.state of initial page
  state = {
    items: [], //initial todo list is empty
    id: this.getTime(),
    item: "", //initial input bar
    show: false,
  };

  //2.typing changes captured
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  //3.capture input after submitting
  handleSubmit = (e) => {
    e.preventDefault(); //to avoid refreshing after submitting

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    // console.log(newItem);

    //4.state is immutable.spread op to get all elements from items[]
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems, //update array
      item: "", //after submitting again blank
      id: this.getTime(),
      show: false,
    });
  };

  //deleting todo item
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    // console.log(selectedItem);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      show: true,
    });
  };

  handleClose = (id) => {
    this.setState({ show: false, item: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <TeamOmegaHeader />
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            <TeamOmegaModalPopup
              item={this.state.item}
              show={this.state.show}
              handleClose={this.handleClose}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
