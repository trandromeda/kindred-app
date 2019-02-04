import { ADD_REQUEST } from '../actionTypes';

const initialState = {
    allRequests: ['knitting', 'agriculture'],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_REQUEST: {
            const { content } = action.payload;
            return {
                ...state,
                allRequests: [...state.allRequests, content]
            }
        }
        default:
            return state;
    }
}