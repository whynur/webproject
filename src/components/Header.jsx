import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="menu-center">
            <img src="logo1.png" alt="" className="logo"/>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default Header;