import { ADD_LESSON } from '../actionTypes';

const initialState = {
    byIds: [
        {
            id: 1,
            title: 'Authentic Spaghetti',
            desc: 'Italian food',
            category: 'cooking',
        },
        {
            id: 2,
            title: 'Sushi Rolling',
            desc: 'Roll three different types of sushi',
            category: 'cooking',
        },
        {
            id: 3,
            title: 'Budgeting 101',
            desc: 'Budgeting wisely today will get you closer to your goals in the future',
            category: 'economics',
        },
        {
            id: 4,
            title: 'As-tu parler le francais?',
            desc: 'A laid-back language class with a focus on reading and conversation',
            category: 'language',
        }
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_LESSON: {
            const { id, content } = action.payload;
            return {
                ...state,
                byIds: [
                    ...state.byIds,
                    { 
                        id,
                        ...content
                    }
                ]
            }
        }
        default:
            return state;
    }
}