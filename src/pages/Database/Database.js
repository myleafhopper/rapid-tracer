import './Database.css';

import LeftSideBar from '../../layout/LeftSideBar/LeftSideBar';
import MainContent from '../../layout/MainContent/MainContent';
import RightSideBar from '../../layout/RightSideBar/RightSideBar';

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