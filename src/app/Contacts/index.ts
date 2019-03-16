import { connect } from "react-redux";
import { load } from "./actions";
import ReduxStore from "../types/store";
import Contacts from "./component";

const mapStateToProps = (state: ReduxStore) => {
  return {contacts: state.contacts};
};

export default connect(mapStateToProps, { load })(Contacts);
