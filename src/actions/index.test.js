import * as actions from './index';
import { posts } from '../data/fixtures';

describe( 'actions', () => {
    it( 'creates an action', () => {
        const expectedAction = {
            type: actions.SET_POSTS,
            posts,
        };
        expect( actions.setPosts( posts ) ).toEqual( expectedAction );
    } );
} );
