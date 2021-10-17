import React from 'react';
import './RightSideBar.css';

export default class RightSideBar extends React.Component {

    render() {
        return (
            <div id="RightSideBar" className="h-100 scrollbar right-side-bar">
                <h2>RIGHT</h2>
                <h6>(FIXED 230px COLUMN)</h6>
            </div>
        );
    }
}