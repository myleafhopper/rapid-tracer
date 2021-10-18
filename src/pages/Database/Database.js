import './Database.css';

import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import MainContent from '../../MainContent/MainContent';
import RightSideBar from '../../RightSideBar/RightSideBar';

export default function Database() {

    return (
        <div id="Database" className="container-fluid h-100 p-0 m-0 database">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Database</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}