import React from "react";
import { connect } from "react-redux";

//Components
import WorkoutTable from "../components/WorkoutTable";

class WorkoutTableContainer extends React.Component {
  onClickEdit = e => {
    console.log(e.target);
  };

  render() {
    return <WorkoutTable onClickEdit={this.onClickEdit} />;
  }
}

const MapStateToProps = state => {
  return {};
};

export default connect(MapStateToProps)(WorkoutTableContainer);
