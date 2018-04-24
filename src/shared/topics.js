import React, { Component } from 'react';
import { Cards } from './card';

export class Topics extends Component {
    render() {
   
        return (
            <div class="row">
                <Cards dataset={'http://materializecss.com/images/office.jpg'} />
                <Cards dataset={'http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg'} />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        )
    }
}