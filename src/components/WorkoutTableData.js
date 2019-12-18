import React from "react";
import { Input } from "reactstrap";

export const WorkoutTableData = props => {
  const date = props.date.replace(/\//g, "");
  console.log(props[date]);
  return (
    <tbody>
      {Object.keys(props[12162019]).map(key => {
        return (
          <tr>
            <th>
              {props[12162019][key] ? props[12162019][key][0] : "T1"} - 5 x 3
            </th>
            <td>
              <Input
                value={props[12162019][key][1]}
                id={key + "-weight"}
                plaintext={props[12162019][key][3]}
                onClick={props.onClick}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                readOnly={props[12162019][key][4]}
              />
            </td>
            <td>{props[12162019][key][2]}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default WorkoutTableData;
