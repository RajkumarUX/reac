import React, { Component } from 'react';
import { ImageCard } from './image-card';


export class Home extends Component {
    render() {
        var imgStyle = {
            transform: 'translate3d(-50%, 271.729, 0)',
            opacity: '1'
        }
        return (
            <div>
                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center  text-lighten-2 yellow-text">Happy Days</h1>
                            <div className="row center">
                                <h5 className="header col s12 light white-text">Enjoy the happy moments with your family</h5>
                            </div>
                            <div className="row center">
                                <a href="/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src="http://zakupynaobcasach.pl/wp-content/uploads/2017/09/people-eiffel-tower-lights-night-hd-wallpaper-high-resolution-background-images-amazing-cool-best-wallpaper-ever-images-free-stock-photos-pictures-1600x1025.jpg" alt="Unsplashed background img 1" style={imgStyle} /></div>
                </div>
                <div className="card-panel hoverable">
                    <p>Hoverable Card Panel</p>
                    <ImageCard />
                </div>
            </div>
        )
    }
}