import React from "react";
import { Table, Input, Label } from "reactstrap";

export const WorkoutTable = props => {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th></th>
          <th>Weight (lb)</th>
          <th>Last Rep</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Squat - 5x3</th>
          <td>
            <Input
              value="90"
              onClick={props.onClickEdit}
              id="t1-weight"
              plaintext
            />
          </td>
          <td>5</td>
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
