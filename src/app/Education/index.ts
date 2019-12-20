import { connect } from "react-redux";
import ReduxStore from "../types/store";
import { load } from "./actions";
import Education from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {educations: state.educations};
};

export default connect(mapStateToProps, { load })(Education);
