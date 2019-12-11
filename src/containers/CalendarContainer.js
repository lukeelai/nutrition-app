import React from "react";
import { connect } from "react-redux";
import moment from "moment";

//Components
import Calendar from "../components/Calendar";
import MenuItem from "../components/MenuItem";

class CalendarContainer extends React.Component {
  getDates = () => {
    let startOfMonth = moment().startOf("month");
    const endOfMonth = moment().endOf("month");
    var dateArray = [];
    while (startOfMonth <= endOfMonth) {
      dateArray.push({
        day: moment(startOfMonth).format("dddd"),
        date: moment(startOfMonth).format("L")
      });
      startOfMonth = moment(startOfMonth).add(1, "days");
    }
    return dateArray;
  };

  getMenu = dateArray => {
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

  onSelect = key => {
    console.log(key);
  };

  render() {
    return (
      <Calendar
        getDates={this.getDates}
        getMenu={this.getMenu}
        onSelect={this.onSelect}
      />
    );
  }
}

// const MapStateToProps = state => {
//   return { search: state.search };
// };

export default connect()(CalendarContainer);
