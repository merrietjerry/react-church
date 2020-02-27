import React, { Component } from "react";
import { connect } from "react-redux";

interface IProps{
  user: any;
}

class DashboardWrapper extends Component<IProps> {

  render() {
    return <div>Dashboard
      <div>{this.props.user.firstName}</div>
    </div>;
  }
}

function mapStateToProps(state: any) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(DashboardWrapper);
