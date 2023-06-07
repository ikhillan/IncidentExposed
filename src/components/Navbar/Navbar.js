import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from "./Button"
import logo from './logo.png';


// This class builds the navigation bar on top of each page on the website
class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (<nav className="NavbarItems">

            {/* creates the links in order to navigate to the home page by clicking the logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={logo} alt="Logo" style={{ width: '90px', height: '50px' }} />
            </Link>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="navbar-logo"><strong>IncidentExposed</strong></h1>
            </Link>



            {/* creates the navbar items on the right side of the bar */}
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} style={{ marginRight: '0px' }}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>


            {/* creates the links in order to navigate to the map/home page by clicking the map button */}
            <Link to='/'>
                <Button>Map</Button>
            </Link>

        </nav>
        )
    }
}

export default Navbar