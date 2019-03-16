import { ContactItem } from "../Contacts/component";
import { EducationItem } from "../Education/component";
import { Skill } from "../Skills/component";
import { Position } from "../Positions/component";

export interface SkillsAction {
    type: string;
    payload: Skill[];
}
export interface ContactsAction {
    type: string;
    payload: ContactItem[];
}
export interface PositionsAction {
    type: string;
    payload: Position[];
}
export interface EducationAction {
    type: string;
    payload: EducationItem[];
}
