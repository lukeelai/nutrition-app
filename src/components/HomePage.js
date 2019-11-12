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
      <div className="row ml-1">
        <p className="col-sm-5" style={{ margin: 0 }}>
          {props.search.foods &&
            `Showing ${props.search.currentPage * props.search.foods.length -
              props.search.foods.length +
              1} - ${props.search.currentPage * props.search.foods.length}`}
        </p>
        <div className="col-md-auto btn-toolbar ml-auto mr-3">
          <div className="btn-group">
            {props.search.totalPages && renderPagination(props.search)}
          </div>
        </div>
      </div>
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
      <div className="row ml-1 btn-group">
        {props.search.totalPages && renderPagination(props.search)}
      </div>
    </div>
  );
};

const renderTableData = props => {
  return props.foods.map(food => {
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

const renderPagination = props => {
  const pageNumbers = [...Array(props.totalPages + 1).keys()].slice(1);
  return pageNumbers.map(page => {
    return (
      <Button
        key={page}
        onClick={() => {
          console.log(page);
        }}
      >
        {page}
      </Button>
    );
  });
};
export default HomePage;
