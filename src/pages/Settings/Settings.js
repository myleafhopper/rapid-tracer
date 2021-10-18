import './Settings.css';

import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import MainContent from '../../MainContent/MainContent';
import RightSideBar from '../../RightSideBar/RightSideBar';

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