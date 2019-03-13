import { connect } from "react-redux";
import { loadSkills } from "../actions";
import ReduxStore from "../types/store";
import Skills from "./Skills";

const mapStateToProps = (state: ReduxStore) => {
  return {skills: state.skills};
};

export default connect(mapStateToProps, { loadSkills })(Skills);
