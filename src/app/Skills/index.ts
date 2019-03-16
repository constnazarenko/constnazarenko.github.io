import { connect } from "react-redux";
import { load } from "./actions";
import ReduxStore from "../types/store";
import Skills from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {skills: state.skills};
};

export default connect(mapStateToProps, { load })(Skills);
