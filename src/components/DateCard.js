import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export const DateCard = props => {
  return (
    <Card style={{ width: "7%" }}>
      <CardBody className="text-center font-weight-bold">
        <CardTitle>props.day</CardTitle>
      </CardBody>
      <CardBody className="text-center ">
        <CardText>props.date</CardText>
      </CardBody>
    </Card>
  );
};

export default DateCard;
