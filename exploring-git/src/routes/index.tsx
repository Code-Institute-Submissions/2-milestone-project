import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Repository from '../pages/repository';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
};

export default Routes;
