import { Skill } from "../Skills";
import { ContactItem } from "../Contacts";

export default interface ReduxStore {
    skills: Skill[];
    contacts: ContactItem[];
}
