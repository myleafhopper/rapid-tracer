import React from 'react';
import './RightSidebar.css';

export default class RightSidebar extends React.Component {

    render() {
        return (
            <div id="RightSidebar" className="h-100 scrollbar RightSidebar">
                <h2>RIGHT</h2>
                <h6>(FIXED 230px COLUMN)</h6>
            </div>
        );
    }
}