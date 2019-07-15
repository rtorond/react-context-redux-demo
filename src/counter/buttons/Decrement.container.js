import {connect} from "react-redux";
import {decrement} from "../../store/count/actions";
import Decrement from "./Decrement";

export default connect(null, {decrement})(Decrement);
