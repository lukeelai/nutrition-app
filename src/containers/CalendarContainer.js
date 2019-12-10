import React from "react";
import { connect } from "react-redux";
import moment from "moment";

//Components
import Calendar from "../components/Calendar";

class CalendarContainer extends React.Component {
  componentDidMount = () => {
    this.getDates();
  };

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

  render() {
    return <Calendar getDates={this.getDates} />;
  }
}

const MapStateToProps = state => {
  return { search: state.search };
};

export default connect(MapStateToProps)(CalendarContainer);
