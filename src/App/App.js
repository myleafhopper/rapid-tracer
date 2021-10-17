import NavigationBar from '../NavigationBar/NavigationBar';
import LeftSideBar from '../abc/abc';
import MainContent from '../MainContent/MainContent';
import RightSideBar from '../123/123';
import InformationBar from '../InformationBar/InformationBar';
import './App.css';

export default function App() {
    return (
        <div className="container-fluid h-100 app">
            <div className="row h-100">
                <NavigationBar />
                <LeftSideBar />
                <MainContent />
                <RightSideBar />
            </div>
            <div className="row">
                <InformationBar />
            </div>
        </div>
    );
}