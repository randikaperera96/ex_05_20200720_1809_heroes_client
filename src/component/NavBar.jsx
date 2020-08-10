import React, { Component } from "react";
import Hero from "./Hero";
import axios from "axios";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/">Home</Link>
                <Link to="/heroes">Heroes</Link>
            </nav>
        );
    }
}

export default NavBar;