import React from "react";
import { connect } from "react-redux";
import axios from "axios";

//Components
import HomePage from "../components/HomePage";

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.foodSearch = this.foodSearch.bind(this);
  }

  foodSearch = e => {
    const api_key = process.env.REACT_APP_FOOD_API_KEY;
    const uri = `https://api.nal.usda.gov/fdc/v1/search?api_key=${api_key}`;
    var data = `{"generalSearchInput":"${e.target.value}"}`;
    const headers = { "Content-Type": "application/json" };
    if (e.key === "Enter" && e.target.value.length > 0) {
      e.preventDefault();
      console.log(e.target.value);
      axios
        .post(uri, data, { headers: headers })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      e.target.value = "";
    }
  };

  render() {
    return <HomePage {...this.props} foodSearch={this.foodSearch} />;
  }
}

const MapStateToProps = state => {
  return { temp: state.temp };
};

export default connect(MapStateToProps)(HomePageContainer);
