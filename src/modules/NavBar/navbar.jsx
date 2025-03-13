import React from 'react'
import logo from '../../assets/Marist_College_Kogarah_crest.png';
import {
    NavLink
} from 'react-router-dom'
import "./navbar.css"

function NavBar() {
    return (
        <section className="navbar">
            <div className="top">
                <NavLink to="/">
                    <img src={logo} alt="Marist College Kogarah Crest" height="80px" />
                </NavLink>
                <h1 className="company-name">Marist College Kogarah Community Portal</h1>

            </div>
            <div className="right">
                <ul id=""><NavLink to="/News"><h1>News</h1></NavLink></ul>
                <ul id=""><NavLink to="/Sport"><h1>Sport</h1></NavLink></ul>
                <ul id=""><NavLink to="/Canteen"><h1>Canteen</h1></NavLink></ul>
                <ul id=""><NavLink to="/Achievements"><h1>Achievements</h1></NavLink></ul>
            </div>
        </section>
    )
}

export default NavBar