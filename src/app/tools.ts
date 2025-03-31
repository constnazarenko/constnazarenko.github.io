import { call, put } from "redux-saga/effects";

export async function fetchJson(uri: string) {
  let resp;
  try {
    const data = await fetch(uri);
    resp = { data: await data.json() };
  } catch (e: any) {
    resp = { err: e.message };
  }
  return resp;
}

export function* loader(uri: string, success: string, failure: string) {
  try {
    const { data, err } = yield call(fetchJson, uri);
    if (!!data) {
      yield put({ type: success, payload: data });
    } else {
      yield put({ type: failure, ...err });
    }
  } catch (e: any) {
    yield put({ type: failure, message: e.message });
  }
}
