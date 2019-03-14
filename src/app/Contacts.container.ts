import { connect } from "react-redux";
import { load } from "./Contacts.actions";
import ReduxStore from "./types/store";
import Contacts from "./Contacts";

const mapStateToProps = (state: ReduxStore) => {
  return {contacts: state.contacts};
};

export default connect(mapStateToProps, { load })(Contacts);
