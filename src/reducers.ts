import { History } from "history";
import { combineReducers } from "redux";
import { appGlobalState, hobbies, profile } from "./app/App/reducer";
import contacts from "./app/Contacts/reducer";
import educations from "./app/Education/reducer";
import positions from "./app/Positions/reducer";
import Skills from "./app/Skills/reducer";

export default (history: History<any>) =>
    combineReducers({
        appGlobalState,
        contacts,
        educations,
        hobbies,
        positions,
        profile,
        skills: Skills,
    });
