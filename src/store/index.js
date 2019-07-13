import {createStore} from 'redux';

export const CATS = 'cats';
export const DOGS = 'dogs';
export const other = (current) => current === CATS ? DOGS : CATS;

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
                ...state,
                preference: other(state.preference)
            };
        default:
            return state;
    }
};

export const store = createStore(countReducer);
