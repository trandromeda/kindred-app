import { ADD_REQUEST } from '../actionTypes';

const initialState = {
    requests: ['knitting'],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_REQUEST: {
            const { content } = action.payload;
            return {
                ...state,
                requests: [...state.requests, content]
            }
        }
        default:
            return state;
    }
}