import { ProfileAction, SettingsAction } from "../types/actions";
import { AppGlobalState, Profile } from "./component";
import {
    FETCH_FAILURE,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    SETTINGS_SWITCH_PRINTABLE,
} from "./const";

export const profile = (state: Profile = {name: "", title: "", summary: ""}, action: ProfileAction) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.payload;
        case FETCH_FAILURE:
        case FETCH_REQUEST:
        default:
            return state;
    }
};

export const appGlobalState = (state: AppGlobalState = {printable: false}, action: SettingsAction) => {
    switch (action.type) {
        case SETTINGS_SWITCH_PRINTABLE:
            return { ...state, printable: action.payload.printable };
        default:
            return state;
    }
};
