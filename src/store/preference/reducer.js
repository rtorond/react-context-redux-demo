import {TOGGLE_PREFERENCE} from "./actionTypes";

export const CATS = 'cats';
export const DOGS = 'dogs';

const other = current => current === CATS ? DOGS : CATS;

const preferenceReducer = (state = CATS, action) => {
    switch (action.type) {
        case TOGGLE_PREFERENCE:
            return other(state);
        default:
            return state;
    }
};

export default preferenceReducer;
