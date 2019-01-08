import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { posts } from '../data/fixtures';
import CandlestickExample from './candlestick.example';


export class App extends Component {

    componentDidMount () {
        document.title = `My general title - ${document.title}`;
        if ( this.props.posts.length === 0 ) {
            // fetch( 'http://jservice.io/api/categories?count=20' )
            //     .then( response => response.json() )
            //     .then( json => this.props.setCategories( json ) );

            // Use fake data for the beginning
            this.props.setPosts( posts );
        }
    }

    render () {
        return (
            <Fragment>
                <h2>{ 'This is a posts list!' }</h2>
                {
                    this.props.posts.map(
                        ( post ) => <PostLink key={ post.id } post={ post } />
                    )
                }
                <CandlestickExample />
            </Fragment>
        );
    }
}

const PostLink = ( { post } ) => (
    <Link
        key={ post.id }
        to={ `/posts/${post.seotitle}` }
    >
        <h4>{ post.title }</h4>
    </Link> );
