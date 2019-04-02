import { Hobbies, Profile } from "../App/component";
import { ContactItem } from "../Contacts/component";
import { EducationItem } from "../Education/component";
import { Position } from "../Positions/component";
import { Skill } from "../Skills/component";

export interface ProfileAction {
    type: string;
    payload: Profile;
}
export interface HobbiesAction {
    type: string;
    payload: Hobbies;
}
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
