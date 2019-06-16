import React from "react"
import "./download-component.css"
import {NavLink} from "react-router-dom";

const Download = () => {
    return (
        <>
            <div className="head">
                <div className="icon-and-text">
                    <NavLink to="/">
                        <i className="far  fa-3x fa-file-alt"></i>
                    </NavLink>
                    <span>Cv Maker</span>
                </div>
                <div className="how-download">
                    <span>1777777</span>
                    <span>Downloads</span>
                </div>
            </div>
        </>
    )
}
export default Download