import React from "react";
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
    <Modal isOpen={props.workoutModal.modal} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Modal title</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="text"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
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
