import React from "react";
import { Table, InputGroup, InputGroupText, Input } from "reactstrap";

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <InputGroup className="searchbox">
        <Input
          placeholder="Ramen..."
          type="text"
          onKeyPress={props.foodSearch}
        />
        <InputGroupText>search</InputGroupText>
      </InputGroup>
      <Table striped>
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Nutrition</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};

export default HomePage;
