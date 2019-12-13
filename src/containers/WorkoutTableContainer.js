import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleText, updateWorkout } from "../actions/workout";

//Components
import WorkoutTable from "../components/WorkoutTable";

class WorkoutTableContainer extends React.Component {
  onClickEdit = e => {
    this.props.toggleText(e.target.value);
    console.log(e.target);
  };

  onClickNewRow = e => {
    console.log("add row");
  };

  onChangeWeight = e => {
    this.props.updateWorkout(0, e.target.value);
  };

  onKeyDown = e => {
    if (e.keyCode === 13) this.props.toggleText(e.target.value);
  };

  render() {
    return (
      <WorkoutTable
        onClickEdit={this.onClickEdit}
        onChangeWeight={this.onChangeWeight}
        onKeyDown={this.onKeyDown}
        {...this.props}
      />
    );
  }
}

const MapStateToProps = state => {
  return { workout: state.workout };
};

export default connect(MapStateToProps, { toggleText, updateWorkout })(
  WorkoutTableContainer
);
