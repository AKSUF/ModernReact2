import React from 'react'
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeStyle={{fontWeight:'bold',color:'red'}}>Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/about" activeStyle={{fontWeight:'bold',color:'red'}}>About</NavLink>
            </li>
            <li>
            <NavLink exact to="/services" activeStyle={{fontWeight:'bold',color:'red'}}>Services</NavLink>

            </li>
            <li>
            <NavLink exact to="/posts/js" activeStyle={{fontWeight:'bold',color:'red'}}>Javascripts</NavLink>

            </li>
        </ul>
      </nav>

    )
}

export default Navbar
