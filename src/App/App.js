import LayoutContainer from "../layout/LayoutContainer/LayoutContainer";
import InformationBar from '../layout/InformationBar/InformationBar';
import './App.css';

export default function App() {
    
    return (
        <div className="container-fluid h-100 app">
            <LayoutContainer />
            <InformationBar />
        </div>
    );
}