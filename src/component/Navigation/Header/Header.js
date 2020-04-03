import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
    return (
        <header className="Header">
            <h3> Routing </h3>
            <nav>
                <li>
                    <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </nav>
        </header>
    )
}

export default Header
