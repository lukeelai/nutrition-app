import React from "react";
import { Table, Input, Button } from "reactstrap";

export const WorkoutTable = props => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            <Button>Add Row</Button>
          </th>
          <th>Weight (lb)</th>
          <th>Last Rep</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{props.workout[0].T1 ? props.workout[0].T1 : "T1"} - 5x3</th>
          <td>
            <Input
              value={props.workout[0].T1_Weight}
              id="t1-weight"
              plaintext={props.workout[0].plaintext}
              disabled={false}
              onClick={props.onClickEdit}
              onChange={props.onChangeWeight}
              onKeyDown={props.onKeyDown}
            />
          </td>
          <td>{props.workout[0].T1_Last}</td>
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
    </Table>
  );
};

export default WorkoutTable;
