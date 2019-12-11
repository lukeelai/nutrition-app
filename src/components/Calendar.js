import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

//Components
import Arrow from "./Arrow";

export const Calendar = props => {
  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
  return (
    <ScrollMenu
      data={props.getMenu(props.getDates())}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={props.menu.date}
      onSelect={props.onSelect}
      scrollToSelected={true}
    />
  );
};

export default Calendar;
