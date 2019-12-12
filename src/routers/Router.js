import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

//Containers
import HeaderContainer from "../containers/HeaderContainer";
import HomePageContainer from "../containers/HomePageContainer";

const Router = () => (
  <BrowserRouter>
    <div>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={HomePageContainer} exact={true} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
