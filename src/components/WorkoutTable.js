import React from "react";
import { Table, Input, Button } from "reactstrap";

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
        return (
          <tbody>
            <tr>
              <th>{workout.T1 ? workout.T1 : "T1"} - 5x3</th>
              <td>
                <Input
                  value={workout.T1_Weight}
                  id="t1-weight"
                  plaintext={workout.plaintext}
                  onClick={props.onClickEdit}
                  onChange={props.onChangeWeight}
                  onKeyDown={props.onKeyDown}
                  readOnly={workout.readonly}
                />
              </td>
              <td>{workout.T1_Last}</td>
            </tr>
            <tr>
              <th>Bench - 3x10</th>
              <td id="t2">37.5</td>
              <td>Fail</td>
            </tr>
            <tr>
              <th>Accessory - 3x10+</th>
              <td id="t3">85</td>
              <td>20</td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default WorkoutTable;
