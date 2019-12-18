import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleText, updateWorkout, toggleReadOnly } from "../actions/workout";
import { toggleModal } from "../actions/workoutModal";

//Components
import WorkoutTable from "../components/WorkoutTable";

//Containers
import WorkoutModalContainer from "../containers/WorkoutModalContainer";

class WorkoutTableContainer extends React.Component {
  onClickEdit = e => {
    if (this.props.workout[0].readonly)
      this.props.toggleReadOnly(e.target.value);
    this.props.toggleText(e.target.value);
  };

  onClickNewRow = e => {
    this.props.toggleModal(e.target.value);
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
      <div>
        <WorkoutTable
          onClickEdit={this.onClickEdit}
          onChangeWeight={this.onChangeWeight}
          onKeyDown={this.onKeyDown}
          onClickDisable={this.onClickDisable}
          onClickNewRow={this.onClickNewRow}
          {...this.props}
        />
        <WorkoutModalContainer />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { workout: state.workout, date: state.menu.date };
};

export default connect(MapStateToProps, {
  toggleText,
  updateWorkout,
  toggleReadOnly,
  toggleModal
})(WorkoutTableContainer);
