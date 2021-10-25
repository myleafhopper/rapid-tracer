import css from './LayoutContainer.module.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationMenu from './NavigationMenu/NavigationMenu';
import PageContainer from './PageContainer/PageContainer';

export default function LayoutContainer() {

    const classes = `row h-100 p-0 m-0 ${css['layout-container']}`;

    return (
        <Router>
            <div className={classes}>
                <NavigationMenu />
                <PageContainer />
            </div>
        </Router>
    );
}