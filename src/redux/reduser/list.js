/* eslint-disable import/no-anonymous-default-export */
import {
    POST_RESPONSE,
    RETRIEVE_POST_COMMENTS,
    CREATE_NEW_COMMENT,
} from '../action/list';


const initState = {
    allPost: [],
    comments: [],
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case POST_RESPONSE:
            return {
                ...state,
                allPost: payload,
            };
        case RETRIEVE_POST_COMMENTS: 
            return {
                ...payload,
            }  
        case CREATE_NEW_COMMENT: 
            return {
                ...state,
                comments: [...state.comments, payload]     
            }  
      default: 
        return state;
    }
  };