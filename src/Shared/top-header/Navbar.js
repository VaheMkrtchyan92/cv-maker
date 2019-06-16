import React from 'react';
import './Navbar.css';
import Modal from "./modal/modal-componnent"
import { NavLink } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return (
            <div>
                <div className="top-header">
                    <div className="divLogo">
                        <NavLink to="/">
                            <i className="fas fa-3x fa-file"></i>
                        </NavLink>

                    </div>
                    <div className="top-header-tex"><h2>Build your CV correctly</h2></div>
                    <div className="login-lang-parent">
                        <button onClick={this.showModal} id="login-button" value="show Modal">Login</button>
                        <div className="dropdown">
                            <button className="dropbtn">Lang</button>
                            <div className="dropdown-content">
                                <a href="#">Arm</a>
                                <a href="#">Eng</a>
                                <a href="#">Rus</a>
                            </div>
                        </div>
                    </div>

                </div>
                <Modal
                    onClose={this.showModal}
                    show={this.state.show}>
                </Modal>

            </div>
        )
    }
}

export default Navbar;
