import './LayoutContainer.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationMenu from './NavigationMenu/NavigationMenu';
import PageContainer from './PageContainer/PageContainer';

export default function LayoutContainer() {

    return (
        <Router>
            <div id="LayoutContainer" className="row h-100 p-0 m-0 layout-container">
                <NavigationMenu />
                <PageContainer />
            </div>
        </Router>
    );
}