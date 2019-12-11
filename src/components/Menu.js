import React from "react";
import moment from "moment";

//Components
import MenuItem from "./MenuItem";

export const Menu = dateArray => {
  return dateArray.map(date => {
    return (
      <MenuItem
        day={date.day}
        text={date.date}
        key={date.date}
        selected={moment().format("L")}
      />
    );
  });
};

export default Menu;
