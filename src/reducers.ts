import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { hobbies, profile } from "./app/App/reducer";
import Contacts from "./app/Contacts/reducer";
import Education from "./app/Education/reducer";
import Positions from "./app/Positions/reducer";
import Skills from "./app/Skills/reducer";

export default (history: History<any>) =>
    combineReducers({
        contacts: Contacts,
        educations: Education,
        hobbies,
        positions: Positions,
        profile,
        router: connectRouter(history),
        skills: Skills,
    });
