import { Position } from "./component";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./const";
import { PositionsAction } from "../types/actions";

const reducer = (state: Position[] = [], action: PositionsAction) => {
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
