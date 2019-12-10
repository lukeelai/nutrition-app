import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import moment from "moment";

export const Calendar = props => {
  const dateObject = moment();
  const month = dateObject.format("M");
  const day = dateObject.format("D");
  const year = dateObject.format("YYYY");
  const name = dateObject.format("dddd");

  return (
    <Card style={{ width: "7%" }}>
      <CardBody className="text-center font-weight-bold">
        <CardTitle>{name}</CardTitle>
      </CardBody>
      <CardBody className="text-center ">
        <CardText>
          {month}/{day}/{year}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Calendar;
