import React, { Component } from 'react'

import { FaAlignRight, FaFly } from "react-icons/fa"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    menuToggle = () => {
        this.setState(prev => {
            return { isOpen: !prev.isOpen }
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="d-flex">
                        <div className="logo-section">
                            <Link to="/" className="logo">
                                <FaFly className="logo-icon" />
                                <span className="logo-text">HotelBookingApp</span>
                            </Link >
                        </div>
                        <span onClick={this.menuToggle} className="mob-menu">
                            <FaAlignRight/>
                        </span>
                    </div>
                    <div className="links-section" style={this.state.isOpen ? { display:"block"}: { display: "none"}}>
                        <Link to="/" >
                            Home
                        </Link >
                        <Link to="/rooms" >
                            Rooms
                        </Link >
                    </div>
                </nav>
            </div>
        )
    }
}

