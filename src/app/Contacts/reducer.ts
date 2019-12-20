import { ContactsAction } from "../types/actions";
import { ContactItem } from "./component";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./const";

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
