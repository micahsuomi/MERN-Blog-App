import {
    GET_POSTS,
    ADD_POST,
    GET_POST,
    EDIT_POST,
    DELETE_POST,
    SEARCH_POSTS
} from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    filteredPosts: [],
    isLoading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }
        case EDIT_POST:
            console.log(action.payload)
            return {
                ...state
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p._id !== action.payload)
            }
        case SEARCH_POSTS:
            console.log(action.payload)
            return {
                ...state,
                filteredPosts: action.payload,
               
            }
        
        
        default:
            return state
    }
}