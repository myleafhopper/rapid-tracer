import LayoutContainer from "../layouts/LayoutContainer/LayoutContainer";
import InformationBar from '../layouts/InformationBar/InformationBar';
import './App.css';

export default function App() {
    
    return (
        <div className="container-fluid h-100 app">
            <LayoutContainer />
            <InformationBar />
        </div>
    );
}