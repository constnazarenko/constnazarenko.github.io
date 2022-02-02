import "@babel/polyfill";
import { createBrowserHistory } from "history";
import * as React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import App from "./app/App";
import "./index.scss";
import rootReducer from "./reducers";
import sagas from "./sagas";

const history = createBrowserHistory();
const reduxLogger = createLogger({
    collapsed: true,
    diff: true,
    predicate: (getState, action) => !!sessionStorage.getItem("enable_redux_logger"),
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(reduxLogger, sagaMiddleware)),
);

sagaMiddleware.run(sagas);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);
