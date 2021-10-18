import './Components.css';

import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import MainContent from '../../MainContent/MainContent';
import RightSideBar from '../../RightSideBar/RightSideBar';

export default function Components() {

    return (
        <div id="Components" className="container-fluid h-100 p-0 m-0 components">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Components</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}