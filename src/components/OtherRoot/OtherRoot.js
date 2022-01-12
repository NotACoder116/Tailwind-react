import React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';

class OtherRoot extends Component {
    render() {
        return ReactDOM.createPortal(
            <h1>Other Root Portal</h1>,
            document.getElementById('other-root')
        );
    }
}

export default OtherRoot;