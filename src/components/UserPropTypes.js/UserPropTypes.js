import React, { Component } from "react";
import UserDetails from "./UserDetails";

export default class UserPropTypes extends Component {
  constructor() {
    super();
    this.state = [
      { id: 1, name: "Yadwinder" },
      { id: 2, name: "Singh" },
    ];
  }
  render() {
    return (
      <div>
        {this.state.map((user) => {
          return <UserDetails name={user.name} id={user.id} key={user.id} />;
        })}
      </div>
    );
  }
}
