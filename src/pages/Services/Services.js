import './Services.css';

import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import MainContent from '../../MainContent/MainContent';
import RightSideBar from '../../RightSideBar/RightSideBar';

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