import { connect } from "react-redux";
import ReduxStore from "../types/store";
import { load } from "./actions";
import Skills from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {skills: state.skills};
};

export default connect(mapStateToProps, { load })(Skills);
