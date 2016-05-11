import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Main from './container/main.jsx';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

//temp merterial ui plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

require('../../stylesheets/calendar/calendar.scss');


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Main />
    </Provider>
    , document.getElementById('app'));
// <Router history={hashHistory} routes={routes}/>

