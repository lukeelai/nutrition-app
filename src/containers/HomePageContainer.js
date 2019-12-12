import React from "react";
import { connect } from "react-redux";

//Actions
import { addSearch } from "../actions/search";

//Components
import HomePage from "../components/HomePage";

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomePage {...this.props} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {};
};

export default connect(MapStateToProps, {
  addSearch
})(HomePageContainer);
