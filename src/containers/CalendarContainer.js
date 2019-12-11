import React from "react";
import { connect } from "react-redux";
import moment from "moment";

//Actions
import { updateSelect } from "../actions/menu";

//Components
import Calendar from "../components/Calendar";
import MenuItem from "../components/MenuItem";

class CalendarContainer extends React.Component {
  getDates = () => {
    let startOfMonth = this.props.menu.startOfMonth;
    const endOfMonth = this.props.menu.endOfMonth;
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
          selected={this.props.menu.date}
        />
      );
    });
  };

  onSelect = key => {
    this.props.updateSelect(key);
  };

  render() {
    return (
      <Calendar
        {...this.props}
        getDates={this.getDates}
        getMenu={this.getMenu}
        onSelect={this.onSelect}
      />
    );
  }
}

const MapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(MapStateToProps, { updateSelect })(CalendarContainer);
