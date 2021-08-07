import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";

import {
  Create as CreateView,
  Applications as ApplicationsView,
  Plans as PlansView,
} from "../../pages";

export const RecruiterChildView = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/create-jobs`} />
        </Route>
        <Route path={`${path}/create-jobs`} component={CreateView} />
        <Route path={`${path}/plans`} component={PlansView} />
        <Route path={`${path}/applications`} component={ApplicationsView} />
      </Switch>
    </Fragment>
  );
};
