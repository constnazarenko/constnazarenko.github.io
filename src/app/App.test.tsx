import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import App from './App';
import { posts } from '../data/fixtures';

const props = { posts, getPosts: {}, setPosts: jest.fn() };

describe( 'App', () => {
    const app = shallow( <App { ...props } /> );

    it( 'renders a title', () => {
        expect( app.find( 'h1' ).text() ).toEqual( 'Testing changes! Yey! It works!' );
    } );

    it( 'title the links correctly', () => {
        app.find( 'Link h4' ).forEach( ( link, index ) => {
            expect( link.text() ).toEqual( posts[index].title );
        } );
    } );
} );
