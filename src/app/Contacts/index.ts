import { connect } from "react-redux";
import ReduxStore from "../types/store";
import { load } from "./actions";
import Contacts from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {contacts: state.contacts, printable: state.appGlobalState.printable};
};

export default connect(mapStateToProps, { load })(Contacts);
