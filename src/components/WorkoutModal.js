import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const WorkoutModal = props => {
  return (
    <Modal isOpen={props.workoutModal.modal} toggle={props.workoutModal.modal}>
      <ModalHeader toggle={props.workoutModal.modal}>Modal title</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.workoutModal.modal}>
          Do Something
        </Button>
        <Button color="secondary" onClick={props.workoutModal.modal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkoutModal;
