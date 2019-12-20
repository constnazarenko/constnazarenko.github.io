import { Action, AnyAction } from "redux";
import { FETCH_REQUEST, SETTINGS_SWITCH_PRINTABLE } from "./const";

export const load = (): Action => ({
    type: FETCH_REQUEST,
});

export const switchPrintable = (printable: boolean): AnyAction => ({
    payload: {printable},
    type: SETTINGS_SWITCH_PRINTABLE,
});
