import React from "react";
import { connect } from "react-redux";

//Actions
import { toggleText } from "../actions/workout";

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

  render() {
    return <WorkoutTable onClickEdit={this.onClickEdit} {...this.props} />;
  }
}

const MapStateToProps = state => {
  return { workout: state.workout };
};

export default connect(MapStateToProps, { toggleText })(WorkoutTableContainer);
