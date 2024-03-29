import './Prototypes.css';

import LeftSideBar from '../../layout/LeftSideBar/LeftSideBar';
import MainContent from '../../layout/MainContent/MainContent';
import RightSideBar from '../../layout/RightSideBar/RightSideBar';

export default function Prototypes() {

    return (
        <div id="Prototypes" className="container-fluid h-100 p-0 m-0 prototypes">
            <div className="row h-100">
                <LeftSideBar></LeftSideBar>
                <MainContent>
                    <h2>Prototypes</h2>
                </MainContent>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}