import './Tests.css';

import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import MainContent from '../../MainContent/MainContent';
import RightSideBar from '../../RightSideBar/RightSideBar';

export default function Services() {

    return (
        <div id="Tests" className="container-fluid h-100 p-0 m-0 tests">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Tests</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}