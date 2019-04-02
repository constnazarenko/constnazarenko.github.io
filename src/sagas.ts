import { all } from "redux-saga/effects";
import App from "./app/App/sagas";
import Contacts from "./app/Contacts/sagas";
import Education from "./app/Education/sagas";
import Positions from "./app/Positions/sagas";
import Skills from "./app/Skills/sagas";

export default function* sagas(): Iterable<any> {
    yield all([
        App(),
        Contacts(),
        Education(),
        Positions(),
        Skills(),
    ]);
}
