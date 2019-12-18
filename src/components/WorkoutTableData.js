import React from "react";
import { Input } from "reactstrap";

export const WorkoutTableData = props => {
  const date = props.date.replace(/\//g, "");
  console.log();
  if (props[date])
    return (
      <tbody>
        {Object.keys(props[date]).map(key => {
          return (
            <tr>
              <th>{props[date][key] ? props[date][key][0] : "T1"} - 5 x 3</th>
              <td>
                <Input
                  value={props[date][key][1]}
                  id={key + "-weight"}
                  plaintext={props[date][key][3]}
                  onClick={props.onClick}
                  onChange={props.onChange}
                  onKeyDown={props.onKeyDown}
                  readOnly={props[date][key][4]}
                />
              </td>
              <td>{props[date][key][2]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  return <tbody></tbody>;
};

export default WorkoutTableData;
