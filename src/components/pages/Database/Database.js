import css from './Database.module.css';
import LeftSideBar from '../../layouts/LeftSideBar/LeftSideBar';
import MainContent from '../../layouts/MainContent/MainContent';
import RightSideBar from '../../layouts/RightSideBar/RightSideBar';

export default function Database() {

    const classes = `container-fluid h-100 p-0 m-0 ${css['database']}`;

    return (
        <div className={classes}>
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