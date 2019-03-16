import { all } from "redux-saga/effects";
import Contacts from "./app/Contacts/sagas";
import Positions from "./app/Positions/sagas";
import Skills from "./app/Skills/sagas";
import Education from "./app/Education/sagas";

export default function* sagas(): Iterable<any> {
    yield all([
        Skills(),
        Contacts(),
        Positions(),
        Education(),
    ]);
}
