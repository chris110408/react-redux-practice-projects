/**
 * Created by leichen on 4/9/16.
 */
/**
 * Created by leichen on 4/5/16.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/app';
import Resource from './components/resourcer'
import auhWrapper from './components/require_auth';

export default (
    <Route path="/" component = {App}>
        <Route  path="/resource" component = {auhWrapper(Resource)}></Route>
    </Route>

)