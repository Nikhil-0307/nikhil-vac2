import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
                <li><Link className='Link' to="/">Home</Link></li>
                <li><Link className='Link' to="/about">About</Link></li>
                <li><Link className='Link' to="/contact">Contact</Link></li>
                <li><Link className='Link' to="/service">Service</Link></li>
                <li><Link className='Link' to="/usestate">UseState</Link></li>
                <li><Link className='Link' to="/useEffect">UseEffect</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar