import { NavLink } from "react-router-dom";
import css from './NavigationMenu.module.css';

import { Window as WindowIcon } from 'react-bootstrap-icons';
import { Bezier2 as Bezier2Icon } from 'react-bootstrap-icons';
import { CardChecklist as CardChecklistIcon } from 'react-bootstrap-icons';
import { HddStack as HddStackIcon } from 'react-bootstrap-icons';
import { Server as ServerIcon } from 'react-bootstrap-icons';
import { Bug as BugIcon } from 'react-bootstrap-icons';
import { Gear as GearIcon } from 'react-bootstrap-icons';

export default function NavigationMenu() {

    const classes = `p-0 ${css['navigation-menu']}`;

    return (
        <div className={classes}>
            <NavLink
                exact
                to="/applications"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><WindowIcon /></span>
                <span className={css.text}>Applications</span>
            </NavLink>
            <NavLink
                exact
                to="/prototypes"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><Bezier2Icon /></span>
                <span className={css.text}>Prototypes</span>
            </NavLink>
            <NavLink
                exact
                to="/components"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><CardChecklistIcon /></span>
                <span className={css.text}>Components</span>
            </NavLink>
            <NavLink
                exact
                to="/services"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><HddStackIcon /></span>
                <span className={css.text}>Services</span>
            </NavLink>
            <NavLink
                exact
                to="/database"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><ServerIcon /></span>
                <span className={css.text}>Database</span>
            </NavLink>
            <NavLink
                exact
                to="/tests"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><BugIcon /></span>
                <span className={css.text}>Tests</span>
            </NavLink>
            <NavLink
                exact
                to="/settings"
                className={css.link}
                activeClassName={css['link-acitve']}>
                <span className={css.icon}><GearIcon /></span>
                <span className={css.text}>Settings</span>
            </NavLink>
        </div>
    );
}