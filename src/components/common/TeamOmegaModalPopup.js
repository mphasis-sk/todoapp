import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import TeamOmegaButton from "./TeamOmegaButton";
import TeamOmegaInputBox from "./TeamOmegaInputBox";

export default class TeamOmegaModalPopup extends Component {
  render() {
    const { item, handleClose, show, handleChange, handleSubmit } = this.props;

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <TeamOmegaInputBox item={item} handleChange={handleChange} />
            </Modal.Body>
            <Modal.Footer>
              <TeamOmegaButton btnName="Close" />
              <TeamOmegaButton btnName="OK" />
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
