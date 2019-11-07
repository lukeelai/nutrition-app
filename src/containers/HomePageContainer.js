import React from "react";
import { connect } from "react-redux";

//Components
import HomePage from "../components/HomePage";

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.foodSearch = this.foodSearch.bind(this);
  }

  foodSearch = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      e.preventDefault();
      console.log(e.target.value);
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
