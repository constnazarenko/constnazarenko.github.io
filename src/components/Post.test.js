import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure( { adapter: new Adapter() } );
import { Post } from './Post';
import { posts } from '../data/fixtures';

const props = { post: posts[0] };

describe( 'Post', () => {
    const category = mount( <Post { ...props } /> );

    it( 'renders the correct title', () => {
        expect( category.find( 'h2' ).text() ).toBe( props.post.title );
    } );
} );
