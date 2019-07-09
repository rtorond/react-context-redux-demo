import {combineReducers} from 'redux';
import countReducer from "./count/reducer";
import preferenceReducer from "./preference/reducer";

const rootReducer = combineReducers({
    count: countReducer,
    preference: preferenceReducer,
});

export default rootReducer;
