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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Modal isOpen={props.workoutModal.modal} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Modal title</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Workout</Label>
            <Input type="select" name="select" id="exampleSelect">
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
              type="text"
              name="weight"
              id="weightAmount"
              placeholder="20 lbs..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="repAmount">Last Set</Label>
            <Input type="text" name="rep" id="repAmount" placeholder="5 reps" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggleModal}>
          Add
        </Button>
        <Button color="secondary" onClick={props.toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default WorkoutModal;
