import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import * as React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import App from "./components/App.container";
import "./index.scss";
import rootReducer from "./reducers/index";

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const reduxLogger = createLogger({diff: true});
const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(reduxLogger, middleware))
);

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route component={App} exact path="/"/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
