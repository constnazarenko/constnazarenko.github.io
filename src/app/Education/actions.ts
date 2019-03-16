import { Action } from "redux";
import { FETCH_REQUEST } from "./const";

export const load = (): Action => ({
    type: FETCH_REQUEST
});
