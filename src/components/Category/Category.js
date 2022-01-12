import React, { Component } from "react";
import { WithCategory } from "./WithCategory";

class Category extends Component {
  render() {
    return (
      <div>
        <div>Categories Component -- name: {this.props.categories}</div>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default WithCategory(2)(Category);
