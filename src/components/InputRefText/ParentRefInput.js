import React, { Component } from "react";
import { InputRefText } from "./InputRefText";

export class ParentRefInput extends Component {
    constructor() {
        super();
        this.parentRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.parentRef.current.focusHandler("from prent"))
    }
    render() {
        return (
            <div>
                <InputRefText ref={this.parentRef} />
            </div>
        );
    }
}