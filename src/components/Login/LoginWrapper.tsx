import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/userAction";
import { Login } from "./login";

interface MyProps {
  actions: any;
  user: any;
  isFetching: boolean;
}

interface MyState {
  username: string;
  password: string;
  submitted: boolean;
}

class LoginWrapper extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }
  componentDidMount(){

    this.logout();
  }

  logout = () =>{
    localStorage.removeItem('user');
    this.props.actions.logout()
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;
    const stateObj: any = { [name]: value };
    this.setState(stateObj);
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.actions.login(username, password);
    }
  };

  render() {
    return (
      <Login
        user={this.props.user}
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);
