import {connect} from "react-redux";
import ReduxStore from "../types/store";
import App from "./App";

const mapStateToProps = (state: ReduxStore) => {
  return {skills: state.skills};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
