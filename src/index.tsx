import "@babel/polyfill";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
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
const middleware = routerMiddleware(history);
const reduxLogger = createLogger({diff: true, collapsed: true, predicate: (getState, action) => !!sessionStorage.getItem("enable_redux_logger")});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(reduxLogger, middleware, sagaMiddleware)),
);

sagaMiddleware.run(sagas);

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route component={App} exact={true} path="/"/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
);
