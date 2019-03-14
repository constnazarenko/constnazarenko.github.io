import { ContactItem } from "../Contacts";
import { Skill } from "../Skills";

export interface SkillsAction {
    type: string;
    payload: Skill[];
}
export interface ContactsAction {
    type: string;
    payload: ContactItem[];
}
