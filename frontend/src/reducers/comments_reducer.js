import {RECEIVE_POST_COMMENTS, RECEIVE_NEW_COMMENT} from '../actions/comment_actions';


const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {}
    switch (action.type) {
        case RECEIVE_POST_COMMENTS:
            // action.comments.data.forEach(comment => {
            //     newState[comment.id] = comment
            // })
            return Object.assign({}, state, action.comments.data)
            // return newState;
        case RECEIVE_NEW_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment.data})
            default:
                return state;
    }

    
}

export default commentsReducer;