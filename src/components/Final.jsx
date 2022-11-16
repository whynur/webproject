import {NavLink} from "react-router-dom";
import React from "react";

const Final = () => {
    return (
        <div className="final-menu">
            <img src="facebook.png" alt="" className="iconface"/>
            <img src="twitter .png" alt="" className="icontwitter"/>
            <img src="insta.png" alt="" className="iconinsta"/>
            <img src="youtube.png" alt="" className="iconyou"/>


            <ul className="footer">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default Final;