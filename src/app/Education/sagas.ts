import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./const";

async function fetchJson(url: string) {
    let resp;
    try {
        const data = await fetch(url);
        resp = { data: await data.json() };
    } catch (e) {
        resp = { err: e.message };
    }
    return resp;
}

function* load() {
    try {
        const { data, err } = yield call(fetchJson, `/api/education`);
        if (!!data) {
            yield put({type: FETCH_SUCCESS, payload: data});
        } else {
            yield put({ type: FETCH_FAILURE, ...err.message });
        }
    } catch (e) {
        yield put({ type: FETCH_FAILURE, message: e.message });
    }
}

export default function* sagas(): Iterable<any> {
    yield takeEvery(FETCH_REQUEST, load);
}
