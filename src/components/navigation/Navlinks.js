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
                <Link to={'/journey'} className="link" tabIndex={ tempTabIndex }>Naše cesta</Link>
            </li>
            <li>
                <Link to={'/place'} className="link" tabIndex={ tempTabIndex }>Místo</Link>
            </li>
            <li>
                <Link to={'/program'} className="link" tabIndex={ tempTabIndex }>Program</Link>
            </li>
            <li>
                <Link to={'/info'} className="link" tabIndex={ tempTabIndex }>Důležité informace</Link>
            </li>
        </ul>
    )
}

export default NavLinks;