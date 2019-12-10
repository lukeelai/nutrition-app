import React from "react";

//Components
import DateCard from "./DateCard";

export const Calendar = props => {
  let dateArray = props.getDates();
  return <DateCard />;
};

export default Calendar;
