import React from "react";
import './Nav.css'
import logo from '../../assets/logo.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <img className="logo-image" src={logo} href=""
                onClick={() => navigate('/')}
            />
            <ul className="navbar-links">
                <li><Link to='/'>home</Link></li>
                <li><a href="">about</a></li>
                <li><a href="">menu</a></li>
                <li><Link to='/reserve-a-table'>reservation</Link></li>
                <li><a href="">order online</a></li>
                <li><a href="">login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;