import React, { Component } from "react";
import TeamOmegaButton from "./common/TeamOmegaButton";
import TeamOmegaInputBox from "./common/TeamOmegaInputBox";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <TeamOmegaInputBox item={item} handleChange={handleChange} />

          <TeamOmegaButton btnName="Add" />
        </form>
      </div>
    );
  }
}
