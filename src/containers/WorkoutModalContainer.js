import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleModal } from "../actions/workoutModal";

//Components
import WorkoutModal from "../components/WorkoutModal";

class WorkoutModalContainer extends React.Component {
  render() {
    return <WorkoutModal {...this.props} />;
  }
}

const MapStateToProps = state => {
  return { workoutModal: state.workoutModal };
};

export default connect(MapStateToProps, { toggleModal })(WorkoutModalContainer);
