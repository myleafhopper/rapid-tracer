import React from 'react';
import './LeftSideBar.css';

export default class LeftSideBar extends React.Component {

    render() {
        return (
            <div id="LeftSideBar" className="h-100 scrollbar left-side-bar">
                <h2>LEFT</h2>
                <h6>(FIXED 400px COLUMN)</h6>
            </div>
        );
    }
}