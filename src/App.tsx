import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Router } from "react-router-dom";

import { history } from './helpers';

//import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/NavigationWrapper";
import RouterLinks from "./router";
import { userActions } from "./redux/actions/userAction";


interface IProps{
  user: any;
  actions:any;
}

class App extends React.Component<IProps> {

  componentDidMount(){
    const activeUser =  localStorage.getItem('user');
    if(activeUser){
      this.props.actions.getUserInfo(activeUser);
    }
  }

  componentDidUpdate(){
    if(this.props.user && this.props.user.phone){
      history.push('/dashboard');
    }
  }
  render() {
    return (
      <React.Fragment>
        <header id="slider-area">
        <Router history={history}>
          <Navigation />
          <div id="content-area">
          
            <RouterLinks />
            
          </div>
          </Router>
          {/* <Carousel /> */}
        </header>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
