import { connect } from "react-redux";
import { load } from "./actions";
import ReduxStore from "../types/store";
import Positions from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {positions: state.positions};
};

export default connect(mapStateToProps, { load })(Positions);
