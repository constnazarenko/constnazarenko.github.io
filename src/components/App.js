import React, { Component } from 'react';

import { posts } from '../data/fixtures';
import './App.scss';
import Photo from './Photo';

class App extends Component {

    componentDidMount () {
        document.title = `CV - ${document.title}`;
        this.props.setPosts( posts );
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
                                <dt>1</dt> <dd>Kyiv, Ukraine</dd>
                                <dt>2</dt> <dd>const@nazarenko.es</dd>
                                <dt>3</dt> <dd>+380 68 197-84-47</dd>
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
