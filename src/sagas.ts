import { all } from "redux-saga/effects";
import Contacts from "./app/Contacts.sagas";
import Skills from "./app/Skills.sagas";

export default function* sagas(): Iterable<any> {
    yield all([
        Skills(),
        Contacts(),
    ]);
}
