import { ContactItem } from "./Contacts";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./Contacts.const";
import { ContactsAction } from "./types/actions";

const reducer = (state: ContactItem[] = [], action: ContactsAction) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload;
        case FETCH_FAILURE:
        case FETCH_REQUEST:
        default:
            return state;
    }
};
export default reducer;
