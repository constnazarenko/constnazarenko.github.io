import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import Skills from "./Skills";

export default (history: History<any>) =>
    combineReducers({
        router: connectRouter(history),
        skills: Skills
    });
