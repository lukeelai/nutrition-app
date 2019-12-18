import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleModal } from "../actions/workoutModal";

//Components
import WorkoutModal from "../components/WorkoutModal";

class WorkoutModalContainer extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    console.log(
      e.target["workoutSelect"].value,
      e.target["workoutName"].value,
      e.target["weightAmount"].value,
      e.target["repAmount"].value
    );
    this.props.toggleModal();
  };

  render() {
    return <WorkoutModal {...this.props} onSubmit={this.onSubmit} />;
  }
}

const MapStateToProps = state => {
  return {
    workoutModal: state.workoutModal,
    date: state.menu.date,
    workout: state.workout
  };
};

export default connect(MapStateToProps, { toggleModal })(WorkoutModalContainer);
