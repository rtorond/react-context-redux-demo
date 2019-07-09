import {createStore} from 'redux';

export const CATS = 'cats';
export const DOGS = 'dogs';

const initialState = {
    count: 0,
    preference: CATS
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'TOGGLE_PREFERENCE':
            return {
                count: 0,
                preference: state.preference === CATS ? DOGS : CATS
            };
        default:
            return state;
    }
};

export const store = createStore(countReducer);
