import React, { Component } from "react";

export class InputRefText extends Component {
  constructor() {
    super()  
    this.inputRef = React.createRef();
  }

  focusHandler = (value)=> {
    this.inputRef.current.focus();
    this.inputRef.current.value = value;
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.focusHandler.bind(this, 'clicked from child ref')}>Click Me For Focus</button>
      </div>
    );
  }
}
