import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

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

function* fetchSkills() {
    try {
        const { data, err } = yield call(fetchJson, `/api/skills`);
        if (!!data) {
            yield put({type: "SKILLS_FETCH_SUCCEEDED", payload: data});
        } else {
            yield put({ type: "SKILLS_FETCH_FAILED", ...err.message });
        }
    } catch (e) {
        yield put({ type: "SKILLS_FETCH_FAILED", message: e.message });
    }
}

function* sagas() {
    yield takeLatest("SKILLS_FETCH_REQUESTED", fetchSkills);
}

export default sagas;
