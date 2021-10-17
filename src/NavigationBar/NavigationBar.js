import React from 'react';
import './NavigationBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default class NavigationBar extends React.Component {

    render() {
        return (
            <div id="NavigationBar" className="navigation-bar">
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faFolder} />
                    <span>Applications</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <span>Prototypes</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faCode} />
                    <span>Components</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faServer} />
                    <span>Services</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faDatabase} />
                    <span>Database</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faBug} />
                    <span>Tests</span>
                </a>
                <a href="#" className="navigation-bar__link">
                    <FontAwesomeIcon icon={faSun} />
                    <span>Settings</span>
                </a>
            </div>
        );
    }
}