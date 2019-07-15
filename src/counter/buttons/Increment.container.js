import {connect} from "react-redux";
import {increment} from "../../store/count/actions";
import Increment from "./Increment";

export default connect(null, {increment})(Increment);
