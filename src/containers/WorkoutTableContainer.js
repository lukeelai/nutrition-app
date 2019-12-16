import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleText, updateWorkout, toggleReadOnly } from "../actions/workout";

//Components
import WorkoutTable from "../components/WorkoutTable";

class WorkoutTableContainer extends React.Component {
  onClickEdit = e => {
    if (this.props.workout[0].readonly)
      this.props.toggleReadOnly(e.target.value);
    this.props.toggleText(e.target.value);
  };

  onClickNewRow = e => {
    console.log("add row");
  };

  onChangeWeight = e => {
    this.props.updateWorkout(0, e.target.value);
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.props.toggleText(e.target.value);
      this.props.toggleReadOnly(e.target.value);
    }
  };

  render() {
    return (
      <WorkoutTable
        onClickEdit={this.onClickEdit}
        onChangeWeight={this.onChangeWeight}
        onKeyDown={this.onKeyDown}
        onClickDisable={this.onClickDisable}
        {...this.props}
      />
    );
  }
}

const MapStateToProps = state => {
  return { workout: state.workout };
};

export default connect(MapStateToProps, {
  toggleText,
  updateWorkout,
  toggleReadOnly
})(WorkoutTableContainer);
