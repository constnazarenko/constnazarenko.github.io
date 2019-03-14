import { Action } from "redux";
import { FETCH_REQUEST } from "./Skills.const";

export const load = (): Action => ({
    type: FETCH_REQUEST,
});
