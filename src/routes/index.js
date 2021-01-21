import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listagem from '../components/Listagem/index';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Listagem} />
    </Switch>
);

export default Routes;