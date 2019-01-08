import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );

import { App } from './App';
import { posts } from '../data/fixtures';

const props = { posts };

describe( 'App', () => {
    const app = shallow( <App { ...props } /> );

    it( 'renders a title', () => {
        expect( app.find( 'h2' ).text() ).toEqual( 'This is a posts list!' );
    } );

    it( 'renders the correct number of links', () => {
        expect( app.find( 'PostLink' ) ).toHaveLength( posts.length );
    } );

    it( 'title the links correctly', () => {
        app.find( 'Link h4' ).forEach( ( link, index ) => {
            expect( link.text() ).toEqual( posts[index].title );
        } );
    } );
} );
