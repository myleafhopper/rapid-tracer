import css from './Services.module.css';

import LeftSideBar from '../../layouts/LeftSideBar/LeftSideBar';
import MainContent from '../../layouts/MainContent/MainContent';
import RightSideBar from '../../layouts/RightSideBar/RightSideBar';

export default function Services() {

    const classes = `container-fluid h-100 p-0 m-0 ${css['services']}`;

    return (
        <div className={classes}>
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