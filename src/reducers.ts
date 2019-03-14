import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import Contacts from "./app/Contacts.reducer";
import Skills from "./app/Skills.reducer";

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        skills: Skills,
        contacts: Contacts,
    });
