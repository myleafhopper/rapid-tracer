import './Services.css';

import LeftSideBar from '../../layout/LeftSideBar/LeftSideBar';
import MainContent from '../../layout/MainContent/MainContent';
import RightSideBar from '../../layout/RightSideBar/RightSideBar';

export default function Services() {

    return (
        <div id="Services" className="container-fluid h-100 p-0 m-0 services">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Services</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}