import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainContent from '../MainContent/MainContent';
import RightSidebar from '../RightSidebar/RightSidebar';
import FooterInformationBar from '../FooterInformationBar/FooterInformationBar';
import './App.css';

export default function App() {
    return (
        <div className="container-fluid h-100 App">
            <div id="AppTopContainer" className="row h-100">
                <LeftSidebar />
                <MainContent />
                <RightSidebar />
            </div>
            <div className="row">
                <FooterInformationBar />
            </div>
        </div>
    );
}