import {connect} from "react-redux";
import {getCount} from "../store/count/selectors";
import Counter from "./Counter";

const connector = connect(
    (state) => ({
        count: getCount(state)
    })
);

export default connector(Counter);
