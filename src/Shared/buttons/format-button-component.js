import React, {Component} from "react"
import "../top-header/coverimage/header-image-component.css"
import {NavLink} from 'react-router-dom'

class PickButton extends Component {
    render() {
        return (
            <NavLink to="/cv-maker/sections/basic">
                <button className="image-text">Pick the best CV format.
                </button>
            </NavLink>
        );
    }
}

export default PickButton