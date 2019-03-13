import { Skill } from "../components/Skills";

export interface SkillsAction {
    type: string;
    payload: {
        skills: Skill[];
    };
}
