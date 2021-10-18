import './NavigationBar.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationMenu from './NavigationMenu/NavigationMenu';
import NavigationSwitch from './NavigationSwitch/NavigationSwitch';

export default function NavigationBar() {

    return (
        <Router>
            <div className="row h-100 p-0 m-0">
                <NavigationMenu />
                <NavigationSwitch />
            </div>
        </Router>
    );
}