import './Applications.css';

import LeftSideBar from '../../layout/LeftSideBar/LeftSideBar';
import MainContent from '../../layout/MainContent/MainContent';
import RightSideBar from '../../layout/RightSideBar/RightSideBar';

export default function Applications() {

    return (
        <div id="Applications" className="container-fluid h-100 p-0 m-0 applications">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Applications</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}