import { Skill } from "../components/Skills";
import { SkillsAction } from "../types/actions";

const skills = (state: Skill[] = [], action: SkillsAction) => {
    switch (action.type) {
        case "SKILLS_FETCH_SUCCEEDED":
            return action.payload;
        case "SKILLS_FETCH_FAILED":
        case "SKILLS_FETCH_REQUESTED":
        default:
            return state;
    }
};
export default skills;
