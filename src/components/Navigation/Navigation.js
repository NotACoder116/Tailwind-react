import React, { Component } from "react";
import ButtonContext from "../Context/ButtonContext";
import UserContext from "../Context/UserContext";

export default class Navigation extends Component {
  static contextType = ButtonContext;
  render() {
    return (
      <div>
          {/* {this.props.children} */}
        <ButtonContext.Consumer>
          {(value) => {
            return <div href="#">{value}</div>;
          }}
        </ButtonContext.Consumer><br></br>
        <UserContext.Consumer>
          {(useValue) => {
            return <div href="#">{useValue.name}</div>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
