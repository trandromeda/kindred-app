import { ADD_LESSON } from '../actionTypes';

const initialState = {
    byIds: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_LESSON: {
            const { id, content } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                    }
                }
            }
        }
        default:
            return state;
    }
}