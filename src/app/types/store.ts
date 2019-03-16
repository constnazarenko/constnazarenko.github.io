import { EducationItem } from "../Education/component";
import { Skill } from "../Skills/component";
import { ContactItem } from "../Contacts/component";
import { Position } from "../Positions/component";

export default interface ReduxStore {
    skills: Skill[];
    contacts: ContactItem[];
    positions: Position[];
    educations: EducationItem[];
}
