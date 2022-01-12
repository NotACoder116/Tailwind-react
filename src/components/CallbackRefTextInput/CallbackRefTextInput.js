import React, { Component } from "react";

export default class CallbackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.inputText = null;
        this.parentInputRef = (e) => {
            this.inputText = e;
        }
    }

    componentDidMount() {
        console.log(this.inputText)
        this.inputText.focus();
    }
   render() {
       return (
           <div>
             <input type="text" ref={this.parentInputRef}></input>
           </div>
       )
   }
}