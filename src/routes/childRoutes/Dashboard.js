import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import {
  Dashboard as DashboardView,
  ActiveSubscription as ActiveSubscriptionView,
  ExpiredSubscription as ExpiredSubscriptionView,
  TrialSubscription as TrialSubscriptionView,
  Create as CreateView,
} from "../../pages";

export const DashboardChildView = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={DashboardView} />
        <Route
          path={`${path}/active-subscription`}
          component={ActiveSubscriptionView}
        />
        <Route
          path={`${path}/expired-subscription`}
          component={ExpiredSubscriptionView}
        />
        <Route
          path={`${path}/trial-subscription`}
          component={TrialSubscriptionView}
        />
        <Route path={`${path}/post-jobs`} component={CreateView} />
      </Switch>
    </Fragment>
  );
};
