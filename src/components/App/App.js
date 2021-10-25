import LayoutContainer from "../layouts/LayoutContainer/LayoutContainer";
import InformationBar from '../layouts/InformationBar/InformationBar';
import css from './App.module.css';

export default function App() {

    const classes = `container-fluid h-100 ${css.app}`;
    
    return (
        <div className={classes}>
            <LayoutContainer />
            <InformationBar />
        </div>
    );
}