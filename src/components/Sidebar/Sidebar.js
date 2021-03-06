import React, { Component } from "react";
import ButtonContext from "../Context/ButtonContext";
import Navigation from "../Navigation/Navigation";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
          {/* {this.props.children} */}
        <ButtonContext.Provider value="Value from Navigation">
          <Navigation />
        </ButtonContext.Provider>
      </div>
    );
  }
}
