import React, { Component } from 'react';
import { posts } from '../data/fixtures';

export class Post extends Component {
    componentDidMount () {
        this.props.pickPost( posts[0] );
    }
    render () {
        const { title, body } = this.props.post;

        return [
            <h2 key="A">{ title }</h2>,
            <div key="B">{ body }</div>,
        ];
    }
}
