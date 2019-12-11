import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export const MenuItem = ({ day, text, selected }) => {
  return (
    <Card className={`menu-item ${selected ? "active" : ""}`}>
      <CardBody className="text-center font-weight-bold">
        <CardTitle>{day}</CardTitle>
      </CardBody>
      <CardBody className="text-center ">
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
