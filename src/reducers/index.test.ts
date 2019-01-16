import rootReducer from './index';
import * as actions from '../actions/index';
import { posts } from '../data/fixtures';

describe( 'rootReducer', () => {
    it( 'returns initial state', () => {
        expect( rootReducer( {}, {} ) ).toEqual( { posts: [], post: {} } );
    } );

    it( 'sets posts', () => {
        expect( rootReducer( {}, { type: actions.SET_POSTS, posts } ) )
            .toEqual( { posts, post: {} } );
    } );
} );
