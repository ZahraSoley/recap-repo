import React from "react";
import './Nav.css'
import logo from '../../assets/logo.jpg'

const Nav = () => {
    return (
        <nav className="navbar">
            <img className="logo-image" src={logo} href=""/>
            <ul className="navbar-links">
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">menu</a></li>
                <li><a href="">reservation</a></li>
                <li><a href="">order online</a></li>
                <li><a href="">login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;