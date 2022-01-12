import React from "react";
import { Component } from "react";

class SinglePosts extends Component {
    render() {
        return (
            <div className="m-4 p-3 border border-gray-400 shadow">
              <h3 className="text-xl font-bold text-blue-600">{this.props.title}</h3>
              <div>{this.props.description}</div>
              <div>{this.props.children}</div>
              <div>{this.props.addPost}</div>
            </div>
          );
    }
};

export default SinglePosts;
