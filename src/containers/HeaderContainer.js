import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import moment from "moment";

//Actions
import { updateMonth, updateSelect } from "../actions/menu";

//Components
import Header from "../components/Header";

//Containers
import CalendarContainer from "../containers/CalendarContainer";

class HeaderContainer extends React.Component {
  onClickToday = () => {
    if (moment().format("M") !== this.props.menu.startOfMonth.format("M"))
      this.props.updateMonth(
        moment().startOf("month"),
        moment().endOf("month")
      );
    this.props.updateSelect(moment().format("L"));
  };

  onClickPrev = () => {
    this.props.updateMonth(
      this.props.menu.startOfMonth.startOf("month").subtract(1, "months"),
      this.props.menu.endOfMonth.endOf("month").subtract(1, "months")
    );
  };

  onClickNext = () => {
    this.props.updateMonth(
      this.props.menu.startOfMonth.startOf("month").add(1, "months"),
      this.props.menu.endOfMonth.endOf("month").add(1, "months")
    );
  };

  render() {
    return (
      <div>
        <Header />
        <CalendarContainer />
        <Button onClick={this.onClickPrev}>Prev Month</Button>
        <Button onClick={this.onClickToday}>Today</Button>
        <Button onClick={this.onClickNext}>Next Month</Button>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(MapStateToProps, { updateMonth, updateSelect })(
  HeaderContainer
);
