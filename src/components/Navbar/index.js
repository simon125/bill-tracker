import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavbarRWD from './NavbarRWD'
class Navbar extends Component {
    state = {
        isNavOpen: false,
    }

    handleOnClick = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <button onClick={this.handleOnClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/enter-bill' className="nav-link">Enter Bill</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/bills' className="nav-link">Bills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/stats' className="nav-link">Statistics</NavLink>
                        </li>
                    </ul>
                </div>
                {
                    this.state.isNavOpen ? <NavbarRWD handleOnClick={this.handleOnClick} /> : null
                }
            </nav>
        )
    }
}
export default Navbar