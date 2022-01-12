import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }
  // Invoked just before the render method
  static getDerivedStateFromError() {
    console.log("getDrivedStateFromError");
    return { hasError: true }
  }  

  // AFTER the render , used for logging the error.
  componentDidCatch(error, info) {
    console.log("componnet di catch")
  }

  render() {
    if (this.state.hasError) {
        return <div>An Error Occured</div>;
    }
    return this.props.children;
  }
}
