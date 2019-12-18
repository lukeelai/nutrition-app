import React from "react";
import { Table, Button } from "reactstrap";

//Components
import WorkoutTableData from "./WorkoutTableData";

export const WorkoutTable = props => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            <Button onClick={props.onClickNewRow}>Add Row</Button>
          </th>
          <th>Weight (lb)</th>
          <th>Last Rep</th>
        </tr>
      </thead>
      {props.workout.map(workout => {
        return <WorkoutTableData {...workout} />;
      })}
    </Table>
  );
};

export default WorkoutTable;
