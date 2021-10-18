import React from 'react';
import { Link } from "react-router-dom";
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
            <Link to="/applications">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faFolder} />
                </div>
            </Link>
            <Link to="/prototypes">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faCodeBranch} />
                </div>
            </Link>
            <Link to="/components">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faCode} />
                </div>
            </Link>
            <Link to="/services">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon id="servicesManuItem" icon={faServer} />
                </div>
            </Link>
            <Link to="/database">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faDatabase} />
                </div>
            </Link>
            <Link to="/tests">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faBug} />
                </div>
            </Link>
            <Link to="/settings">
                <div className="navigation-menu__link">
                    <FontAwesomeIcon icon={faSun} />
                </div>
            </Link>
        </div>
    );
}