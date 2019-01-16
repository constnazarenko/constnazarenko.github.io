import { PICK_POST, SET_POSTS } from '../actions/index';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

function posts ( state = [], action ) {
    switch ( action.type ) {
        case SET_POSTS:
            return action.posts;
        default:
            return state;
    }
}

function post ( state = {}, action ) {
    switch ( action.type ) {
        case PICK_POST:
            return action.post;
        default:
            return state;
    }
}

export default ( history ) => combineReducers( { posts, post, router: connectRouter( history ) } );
