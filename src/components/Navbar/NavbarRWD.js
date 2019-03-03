import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarRWD.css'

const NavbarRWD = ({ handleOnClick }) => {
    return (
        <div onClick={handleOnClick} className="navbar-nav__rwd--container">
            <ul className="navbar-nav__rwd">
                <li className="nav-item__rwd">
                    <Link className="nav-item__rwd--option" to='/' >
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li className="nav-item__rwd">
                    <Link className="nav-item__rwd--option" to='/enter-bill' >
                        <i className="fab fa-wpforms"></i> Enter Bill
                    </Link>
                </li>
                <li className="nav-item__rwd">
                    <Link className="nav-item__rwd--option" to='/bills' >
                        <i className="fas fa-file-invoice"></i> Bills
                    </Link>
                </li>
                <li className="nav-item__rwd">
                    <Link className="nav-item__rwd--option" to='/stats'>
                        <i className="far fa-chart-bar"></i> Statistics
                    </Link>
                </li>
                <li className="nav-item__rwd">
                    <span className="nav-item__rwd--option">&times; Close</span>
                </li>
            </ul>
        </div>
    )
}
export default NavbarRWD