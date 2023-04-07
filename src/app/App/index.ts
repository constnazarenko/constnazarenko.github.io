import { connect } from "react-redux";
import ReduxStore from "../types/store";
import { load, switchPrintable } from "./actions";
import App from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {profile: state.profile, printable: state.appGlobalState.printable};
};

export default connect(mapStateToProps, { load, switchPrintable })(App);
