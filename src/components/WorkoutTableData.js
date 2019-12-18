import React from "react";
import { Input } from "reactstrap";

export const WorkoutTableData = props => {
  console.log(props[12162019].T1);
  return (
    <tbody>
      <tr>
        <th>{props[12162019].T1 ? props[12162019].T1[0] : "T1"} - 5x3</th>
        <td>
          <Input
            value={props[12162019].T1[1]}
            id="t1-weight"
            plaintext={props[12162019].T1[3]}
            onClick={props.onClick}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            readOnly={props[12162019].T1[4]}
          />
        </td>
        <td>{props[12162019].T1[2]}</td>
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
