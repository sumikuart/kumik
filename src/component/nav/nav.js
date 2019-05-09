import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = () => {

    return(
    <nav className="navigation">
        <div className="container">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/lore">Lore</NavLink></li>
                <li><NavLink to="/test">The Test</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

        </div>
    </nav>
    )
    
    }
    
    export default Navbar