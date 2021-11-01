import React, {Component} from "react";
import {Link} from "react-router-dom";

const NavLinks = props => {
    let tempTabIndex
    if (props.isMobileLink) {
        tempTabIndex = "-1"
    }
    return (
        <ul className="nav-links">
            <li>
                <Link to={process.env.PUBLIC_URL + '/journey'} className="link" tabIndex={ tempTabIndex }>Naše cesta</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + '/place'} className="link" tabIndex={ tempTabIndex }>Místo</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + '/program'} className="link" tabIndex={ tempTabIndex }>Program</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + '/info'} className="link" tabIndex={ tempTabIndex }>Důležité informace</Link>
            </li>
        </ul>
    )
}

export default NavLinks;