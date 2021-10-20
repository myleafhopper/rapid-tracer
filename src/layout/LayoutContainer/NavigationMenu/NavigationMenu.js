import React from 'react';
import { NavLink } from "react-router-dom";
import './NavigationMenu.css';

import { Window as WindowIcon } from 'react-bootstrap-icons';
import { Bezier2 as Bezier2Icon } from 'react-bootstrap-icons';
import { CardChecklist as CardChecklistIcon } from 'react-bootstrap-icons';
import { HddStack as HddStackIcon } from 'react-bootstrap-icons';
import { Server as ServerIcon } from 'react-bootstrap-icons';
import { Bug as BugIcon } from 'react-bootstrap-icons';
import { Gear as GearIcon } from 'react-bootstrap-icons';

export default function NavigationMenu() {

    return (
        <div id="NavigationBar" className="navigation-menu p-0">
            <NavLink exact to="/applications"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><WindowIcon /></span>
                <span className="navigation-menu-text">Applications</span>
            </NavLink>
            <NavLink exact to="/prototypes"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><Bezier2Icon /></span>
                <span className="navigation-menu-text">Prototypes</span>
            </NavLink>
            <NavLink exact to="/components"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><CardChecklistIcon /></span>
                <span className="navigation-menu-text">Components</span>
            </NavLink>
            <NavLink exact to="/services"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><HddStackIcon /></span>
                <span className="navigation-menu-text">Services</span>
            </NavLink>
            <NavLink exact to="/database"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><ServerIcon /></span>
                <span className="navigation-menu-text">Database</span>
            </NavLink>
            <NavLink exact to="/tests"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><BugIcon /></span>
                <span className="navigation-menu-text">Tests</span>
            </NavLink>
            <NavLink exact to="/settings"
                className="navigation-menu__link"
                activeClassName="navigation-menu__link-active">
                <span className="navigation-menu-icon"><GearIcon /></span>
                <span className="navigation-menu-text">Settings</span>
            </NavLink>
        </div>
    );
}