import {connect} from "react-redux";
import {isDogLover} from "../store/preference/selectors";
import {togglePreference} from "../store/preference/actions";
import {Appbar} from "./Appbar";

const connector = connect(
    (state) => ({
        isDogLover: isDogLover(state)
    }),
    {
        togglePreference,
    }
);

export default connector(Appbar);
