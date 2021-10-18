import './Settings.css';

import LeftSideBar from '../../layout/LeftSideBar/LeftSideBar';
import MainContent from '../../layout/MainContent/MainContent';
import RightSideBar from '../../layout/RightSideBar/RightSideBar';

export default function Settings() {

    return (
        <div id="Settings" className="container-fluid h-100 p-0 m-0 settings">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Settings</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}