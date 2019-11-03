import React, { Component } from 'react';
import System from './iframe/iframesystem';
import './event.css';

import Navbar from './Navbar';

class about extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="event-container">
                    <div className="heading-event">
                        Excel your English Competency
                    </div>
                    <div className="seperator-event"></div>
                    <div className="detail-container">
                    <System
                        className="video-component"
                        src="https://www.youtube.com/embed/Qb6SPx40v0g"
                        width="1024"
                        height="568"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        /> 
                        <div className="chatbox">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;