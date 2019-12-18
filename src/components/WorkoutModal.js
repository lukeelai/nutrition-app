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
  const date = props.date.replace(/\//g, "");
  let data = { [date]: {} };
  return (
    <Modal isOpen={props.workoutModal.modal} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Modal title</ModalHeader>
      <ModalBody>
        <Form onSubmit={props.onSubmit}>
          <FormGroup>
            <Label for="workoutSelect">Workout</Label>
            <Input type="select" name="select" id="workoutSelect">
              <option>T1</option>
              <option>T2</option>
              <option>T3</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="workoutName">Workout</Label>
            <Input
              type="text"
              name="workout"
              id="workoutName"
              placeholder="Squats..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="weightAmount">Weight (lbs)</Label>
            <Input
              type="number"
              step="0.1"
              name="weight"
              id="weightAmount"
              placeholder="20 lbs..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="repAmount">Last Set</Label>
            <Input type="text" name="rep" id="repAmount" placeholder="5 reps" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default WorkoutModal;
