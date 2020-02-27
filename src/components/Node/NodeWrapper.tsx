//This Component used to render dynamic content 
import React, { Component } from "react";
import Node from "./Node";
import { callApi } from "../../middleware/api";

interface IProps {
  match: any;
  history: any;
  location: any;
}
interface IState {
  wild: any;
  data: any;
  isFetching: boolean;
}

class NodeWrapper extends Component<IProps, IState> {
  unlisten: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      wild: this.props.match.params.wild,
      data: {},
      isFetching: true
    };
  }
  componentDidMount() {
    this.getNode();
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location: any, action: any) => {
      const wild = location.pathname.replace("/", "");
      this.setState({ wild }, () => this.getNode());
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  getNode() {
    if (this.state.wild) {
      callApi("detail/?path=" + this.state.wild, "GET").then(res => {
        this.setState({ data: res.data[0] , isFetching: false});
      });
    }
  }

  render() {
    return <Node data={this.state.data} />;
  }
}

export default NodeWrapper;
