import React from 'react';
import "./footer-component.css";
import Social from "./social/social-component"
import Contact from "./contact/contacts"
import ItFrame from "./itFramellc/itframe-component"


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="footer">
                    <Contact/>
                    <ItFrame/>
                    <Social/>
                </div>
            </>
        )
    }
}

export default Footer;