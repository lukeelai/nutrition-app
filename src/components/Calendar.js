import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import moment from "moment";

//Components
import DateCard from "./DateCard";
import Menu from "./Menu";
import Arrow from "./Arrow";

export const Calendar = props => {
  let dateArray = props.getDates();
  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
  const menu = Menu(dateArray);
  return (
    <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={moment().format("L")}
    />
  );
};

export default Calendar;
