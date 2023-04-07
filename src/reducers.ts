import { combineReducers } from "redux";
import { appGlobalState, profile } from "./app/App/reducer";
import contacts from "./app/Contacts/reducer";
import educations from "./app/Education/reducer";
import positions from "./app/Positions/reducer";
import Skills from "./app/Skills/reducer";

export default () =>
    combineReducers({
        appGlobalState,
        contacts,
        educations,
        positions,
        profile,
        skills: Skills,
    });
