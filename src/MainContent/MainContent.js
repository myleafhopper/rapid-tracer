import React from 'react';
import './MainContent.css';

export default class MainContent extends React.Component {

    render() {
        return (
            <div id="MainContent" className="col h-100 scrollbar main-content">
                <h2>CENTER (FLUID COLUMN)</h2>
                <h6>(MAIN CONTENT)</h6>
            </div>
        );
    }
}