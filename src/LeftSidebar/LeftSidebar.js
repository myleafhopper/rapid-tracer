import React from 'react';
import './LeftSidebar.css';

export default class LeftSidebar extends React.Component {

    render() {
        return (
            <div id="LeftSidebar" className="h-100 scrollbar LeftSidebar">
                <h2>LEFT</h2>
                <h6>(FIXED 400px COLUMN)</h6>
            </div>
        );
    }
}