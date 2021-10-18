import NavigationBar from "../NavigationBar/NavigationBar";
import InformationBar from '../InformationBar/InformationBar';
import './App.css';

export default function App() {
    
    return (
        <div className="container-fluid h-100 app">
            <NavigationBar />
            <InformationBar />
        </div>
    );
}