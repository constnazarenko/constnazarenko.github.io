import { Skill } from "../components/Skills";

export interface SkillsAction {
    type: string;
    payload: Skill[];
}
