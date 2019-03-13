import { Skill } from "../components/Skills";
import { SkillsAction } from "../types/actions";

const skills = (state: Skill[] = [], action: SkillsAction) => {
    switch (action.type) {
        case 'SKILLS_LOAD':
            return action.payload.skills;
    }
    return state;
};
export default skills;
