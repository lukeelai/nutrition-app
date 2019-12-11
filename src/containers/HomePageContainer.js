import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "reactstrap";
import moment from "moment";

//Actions
import { addSearch } from "../actions/search";
import { updateSelect, updateMonth } from "../actions/menu";

//Components
import HomePage from "../components/HomePage";

//Containers
import CalendarContainer from "../containers/CalendarContainer";

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.foodSearch = this.foodSearch.bind(this);
  }

  foodSearch = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      const uri = `https://api.edamam.com/api/food-database/parser?ingr=${e.target.value}&app_id=${process.env.REACT_APP_EDAMAM_API_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
      e.preventDefault();
      console.log(uri);
      axios(uri)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
      e.target.value = "";
    }
  };

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
        <Button onClick={this.onClickPrev}>Prev Month</Button>
        <Button onClick={this.onClickToday}>Today</Button>
        <Button onClick={this.onClickNext}>Next Month</Button>
        <CalendarContainer />
        <HomePage {...this.props} foodSearch={this.foodSearch} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { search: state.search, menu: state.menu };
};

export default connect(MapStateToProps, {
  addSearch,
  updateSelect,
  updateMonth
})(HomePageContainer);
