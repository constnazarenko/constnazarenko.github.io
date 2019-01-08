import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import App from './components/App.container';
import Post from './components/Post.container';
import './index.scss';

const history = createBrowserHistory();
const middleware = routerMiddleware( history );
const reduxLogger = createLogger( { diff: true } );
const store = createStore(
    rootReducer( history ),
    compose( applyMiddleware( reduxLogger, middleware ) )
);
// react-router-redux.push
// store.dispatch(push('/posts/helloworld'));
ReactDom.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route component={ App } exact path="/" />
                <Route component={ Post } exact path="/posts/:seotitle" />
                <Redirect exact from="/posts" to="/" />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById( 'root' )
);
