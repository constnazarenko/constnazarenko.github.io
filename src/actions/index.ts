export const SET_POSTS = 'SET_POSTS';
export const PICK_POST = 'PICK_POST';

export function setPosts ( posts ) {
    return {
        type: SET_POSTS,
        posts,
    };
}

export function pickPost ( post ) {
    return {
        type: PICK_POST,
        post,
    };
}
