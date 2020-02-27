import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { userActions } from "../../redux/actions/userAction";
import Registration from "./Registration";

interface IProps {
  actions: any;
}
interface IState {
  user: {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    key: string;
  }
  submitted: boolean;
}

class RegistrationWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phone:0 ,
        key: ""
      },
      submitted: false
    };
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;
    const stateObj: any = {...this.state.user, [name]: value }
    this.setState({user: stateObj});
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.email && user.key) {
      this.props.actions.register(user);
    }
  };

  render() {
    return (
      <Registration
        user={this.state.user}
        registration={this.props}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

function mapStateToProps(state: any) {
  return {
    registration: state.registration
  };
}

function mapDispatcToProps(dispatch: any) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatcToProps)(RegistrationWrapper);
