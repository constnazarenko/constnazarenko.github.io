import { connect } from "react-redux";
import ReduxStore from "../types/store";
import { load } from "./actions";
import App from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {hobbies: state.hobbies, profile: state.profile};
};

export default connect(mapStateToProps, { load })(App);
