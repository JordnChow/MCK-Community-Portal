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
                <ul>
                    <NavLink 
                        to="/News" 
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        <h1>News</h1>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink 
                        to="/Sport" 
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        <h1>Sport</h1>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink 
                        to="/Canteen" 
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        <h1>Canteen</h1>
                    </NavLink>
                </ul>
                <ul>
                    <NavLink 
                        to="/Achievements" 
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        <h1>Achievements</h1>
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

export default NavBar