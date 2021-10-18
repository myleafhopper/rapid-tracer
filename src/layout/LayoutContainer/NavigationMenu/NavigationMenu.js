import React from 'react';
import { NavLink } from "react-router-dom";
import './NavigationMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function NavigationMenu() {

    return (
        <div id="NavigationMenu" className="col h-100 navigation-menu">
            <NavLink exact to="/applications" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faFolder} />
                </div>
            </NavLink>
            <NavLink exact to="/prototypes" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faCodeBranch} />
                </div>
            </NavLink>
            <NavLink exact to="/components" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faCode} />
                </div>
            </NavLink>
            <NavLink exact to="/services" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon id="servicesManuItem" icon={faServer} />
                </div>
            </NavLink>
            <NavLink exact to="/database" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faDatabase} />
                </div>
            </NavLink>
            <NavLink exact to="/tests" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faBug} />
                </div>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="navigation-menu__active">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faSun} />
                </div>
            </NavLink>
        </div>
    );
}