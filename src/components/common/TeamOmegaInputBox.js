import React, { Component } from "react";

export default class TeamOmegaInputBox extends Component {
  render() {
    const { item, handleChange } = this.props;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control text-capitalize"
          placeholder="enter task here"
          value={item}
          onChange={handleChange}
        />
      </div>
    );
  }
}
