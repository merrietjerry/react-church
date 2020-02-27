import * as React from "react";
import { Route, Switch } from "react-router-dom";
import {PrivateRoute} from "./middleware/PrivateRoute";
import { connect } from "react-redux";

import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login/LoginWrapper";
import Registration from "./components/Registration/RegistrationWrapper";
import Dashboard from "./components/Dashboard/DashboardWrapper";
import Node from "./components/Node/NodeWrapper";

interface IProps{
    user: {}
}

class routerLinks extends React.Component<IProps>{

    render(){
        return (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/register" component={Registration} user={this.props.user} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} user={this.props.user} />
              <Route exact path="/:wild" component={Node} />
              <Route component={PageNotFound} />
            </Switch>
          );
    }
}

function mapStateToProps(state: any) {
    return {
      user: state.user
    };
  }

export default connect(mapStateToProps)(routerLinks);
