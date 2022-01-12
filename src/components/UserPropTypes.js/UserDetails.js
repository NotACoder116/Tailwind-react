import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class UserDetails extends Component {
    render() {
        return (
            <div>
                <div>Id: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
            </div>
        );
    }
}

UserDetails.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}