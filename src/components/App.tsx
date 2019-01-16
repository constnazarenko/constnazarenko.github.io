import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, far, faMapMarkerAlt, faPhone);

import './App.scss';
import Photo from './Photo';

class App extends Component {

    componentDidMount () {
        document.title = `CV - ${document.title}`;
    }

    render () {
        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        <Photo src="/images/face.jpg" />
                        <div className="name-title">
                            <h1>Constantine Nazárenko</h1>
                            <h2>Senior software developer</h2>
                        </div>
                        <div className="contacts">
                            <dl>
                                <dt><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></dt> <dd>Kyiv, Ukraine</dd>
                                <dt><FontAwesomeIcon icon={['far', 'envelope']} /></dt> <dd><a href="mailto:const@nazarenko.es">const@nazarenko.es</a></dd>
                                <dt><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></dt> <dd><a href="https://t.me/const_nazarenko">const_nazarenko</a></dd>
                                <dt><FontAwesomeIcon icon={['fas', 'phone']} /></dt> <dd>+380 68 197-84-47</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <header>
                            <h2>{ 'Testing changes! Yey! It works!' }</h2>
                        </header>
                        <p>Some text here</p>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
