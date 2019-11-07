import React from "react";
import { Table, InputGroup, InputGroupText, Input, Button } from "reactstrap";

const HomePage = props => {
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
            <th>Brand</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!(
            Object.entries(props.search).length === 0 &&
            props.search.constructor === Object
          )
            ? renderTableData(props.search)
            : null}
        </tbody>
      </Table>
    </div>
  );
};

const renderTableData = props => {
  return props.foods
    .filter(food => food.brandOwner !== undefined)
    .map(food => {
      const { fdcId, brandOwner, description } = food;
      return (
        <tr key={fdcId}>
          <td>{brandOwner}</td>
          <td>{description}</td>
          <td>
            <Button color="primary">More Info</Button>
          </td>
        </tr>
      );
    });
};

export default HomePage;
