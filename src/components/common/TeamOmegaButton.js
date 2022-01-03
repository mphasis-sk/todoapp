import React, { Component } from "react";

export default class TeamOmegaButton extends Component {
  render() {
    const { btnName } = this.props;
    return (
      <div>
        <button
          type="submit"
          className={
            btnName === "Close"
              ? "btn col-12 btn-danger mt-3"
              : "btn col-12 btn-primary mt-3"
          }
        >
          {btnName}
        </button>
      </div>
    );
  }
}
