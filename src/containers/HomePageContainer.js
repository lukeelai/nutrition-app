import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "reactstrap";
import moment from "moment";

//Actions
import { addSearch } from "../actions/search";
import { updateSelect } from "../actions/menu";

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

  onClick = () => {
    this.props.updateSelect(moment().format("L"));
  };

  render() {
    return (
      <div>
        <Button>Prev Month</Button>
        <Button onClick={this.onClick}>Today</Button>
        <Button>Next Month</Button>
        <CalendarContainer />
        <HomePage {...this.props} foodSearch={this.foodSearch} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return { search: state.search, menu: state.menu };
};

export default connect(MapStateToProps, { addSearch, updateSelect })(
  HomePageContainer
);
