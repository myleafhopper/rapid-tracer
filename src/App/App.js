import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainContent from '../MainContent/MainContent';
import RightSidebar from '../RightSidebar/RightSidebar';
import InformationBar from '../InformationBar/InformationBar';
import './App.css';

export default function App() {
    return (
        <div className="container-fluid h-100 App">
            <div className="row h-100">
                <LeftSidebar />
                <MainContent />
                <RightSidebar />
            </div>
            <div className="row">
                <InformationBar />
            </div>
        </div>
    );
}