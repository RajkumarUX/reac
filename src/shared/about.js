import React, { Component } from 'react';
import { Widget } from './widget'

export class About extends Component {
    render() {
        var imgStyle = {
            transform: 'translate3d(-50%, 271.729, 0)',
            opacity: '1'
        }
        return (
            <div className="row">
                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center  text-lighten-2 indigo-text">Happy Days</h1>
                            <div className="row center">
                                <h5 className="header col s12 light black-text">Enjoy the happy moments with your family</h5>
                            </div>
                            <div className="row center">
                                <a href="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src="https://i.ytimg.com/vi/Hnl4PNtql5A/maxresdefault.jpg" alt="Unsplashed background img 1" style={imgStyle} /></div>
                </div>
                <Widget />
                <Widget />
            </div>

        )
    }
}