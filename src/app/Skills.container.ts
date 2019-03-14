import { connect } from "react-redux";
import { load } from "./Skills.actions";
import ReduxStore from "./types/store";
import Skills from "./Skills";

const mapStateToProps = (state: ReduxStore) => {
  return {skills: state.skills};
};

export default connect(mapStateToProps, { load })(Skills);
