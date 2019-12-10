import React from "react";
import { connect } from "react-redux";
import axios from "axios";

//Actions
import { addSearch } from "../actions/search";

//Components
import HomePage from "../components/HomePage";

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

  render() {
    return <HomePage {...this.props} foodSearch={this.foodSearch} />;
  }
}

const MapStateToProps = state => {
  return { search: state.search };
};

export default connect(MapStateToProps, { addSearch })(HomePageContainer);
