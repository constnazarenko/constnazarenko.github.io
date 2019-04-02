import { takeLatest } from "redux-saga/effects";
import { loader } from "../tools";
import {
    FETCH_FAILURE,
    FETCH_HOBBY_FAILURE,
    FETCH_HOBBY_SUCCESS,
    FETCH_REQUEST,
    FETCH_SUCCESS,
} from "./const";

function* load() {
    yield loader("/api/profile", FETCH_SUCCESS, FETCH_FAILURE);
    yield loader("/api/hobbies", FETCH_HOBBY_SUCCESS, FETCH_HOBBY_FAILURE);
}

export default function* sagas(): Iterable<any> {
    yield takeLatest(FETCH_REQUEST, load);
}
