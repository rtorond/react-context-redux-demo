import {DOGS} from "./reducer";

export const getPreference = (state) => state.preference;
export const isDogLover = (state) => state.preference === DOGS;
