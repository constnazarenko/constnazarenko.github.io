import { EducationItem } from "./component";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./const";
import { EducationAction } from "../types/actions";

const reducer = (state: EducationItem[] = [], action: EducationAction) => {
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
