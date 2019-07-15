import {connect} from "react-redux";
import {getCount} from "../store/count/selectors";
import {getPreference} from "../store/preference/selectors";
import {Animals} from "./Animals";

const connector = connect(
    (state) => ({
        count: getCount(state),
        preference: getPreference(state)
    })
);

export default connector(Animals);
