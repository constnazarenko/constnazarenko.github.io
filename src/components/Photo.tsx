import React, { Component } from 'react';

import './Photo.scss';

class Photo extends Component {
    render () {
        return (
            <div className="photo-wrapper">
                <div className="photo" style={ { backgroundImage: `url('${this.props.src}')` } } />
            </div>
        );
    }
}
export default Photo;
