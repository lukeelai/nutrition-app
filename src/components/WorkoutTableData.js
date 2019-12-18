import React from "react";
import { Input } from "reactstrap";

export const WorkoutTableData = props => {
  console.log(props);
  return (
    <tbody>
      <tr>
        <th>{props.T1 ? props.T1 : "T1"} - 5x3</th>
        <td>
          <Input
            value={props.T1_Weight}
            id="t1-weight"
            plaintext={props.plaintext}
            onClick={props.onClick}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            readOnly={props.readonly}
          />
        </td>
        <td>{props.T1_Last}</td>
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
};

export default WorkoutTableData;
