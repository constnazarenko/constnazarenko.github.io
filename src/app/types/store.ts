import { AppGlobalState, Profile } from "../App/component";
import { ContactItem } from "../Contacts/component";
import { EducationItem } from "../Education/component";
import { Position } from "../Positions/component";
import { Skill } from "../Skills/component";

export default interface ReduxStore {
    contacts: ContactItem[];
    educations: EducationItem[];
    positions: Position[];
    profile: Profile;
    skills: Skill[];
    appGlobalState: AppGlobalState;
}
