import { Skill } from "./Skills";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./Skills.const";
import { SkillsAction } from "./types/actions";

const reducer = (state: Skill[] = [], action: SkillsAction) => {
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
