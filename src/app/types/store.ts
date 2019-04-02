import { Hobby, Profile } from "../App/component";
import { ContactItem } from "../Contacts/component";
import { EducationItem } from "../Education/component";
import { Position } from "../Positions/component";
import { Skill } from "../Skills/component";

export default interface ReduxStore {
    contacts: ContactItem[];
    hobbies: Hobby[];
    educations: EducationItem[];
    positions: Position[];
    profile: Profile;
    skills: Skill[];
}
