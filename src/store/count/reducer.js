import {TOGGLE_PREFERENCE} from "../preference/actionTypes";
import {DECREMENT, INCREMENT} from "./actionsTypes";

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case TOGGLE_PREFERENCE:
            return 0;
        default:
            return state;
    }
};

export default countReducer;
