import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import Contacts from "./app/Contacts/reducer";
import Positions from "./app/Positions/reducer";
import Education from "./app/Education/reducer";
import Skills from "./app/Skills/reducer";

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        skills: Skills,
        contacts: Contacts,
        positions: Positions,
        educations: Education,
    });
