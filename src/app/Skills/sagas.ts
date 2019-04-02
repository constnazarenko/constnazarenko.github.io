import { takeLatest } from "redux-saga/effects";
import { loader } from "../tools";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./const";

function* load() {
    yield loader("/api/skills", FETCH_SUCCESS, FETCH_FAILURE);
}

export default function* sagas(): Iterable<any> {
    yield takeLatest(FETCH_REQUEST, load);
}
