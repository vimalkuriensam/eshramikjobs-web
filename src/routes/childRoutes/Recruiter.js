import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";

import {
  Create as CreateView,
  Applications as ApplicationsView,
  Plans as PlansView,
  BuyPlans as BuyPlansView,
} from "../../pages";
import RecruiterRoute from "../RecruiterRoute";

export const RecruiterChildView = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/create-jobs`} />
        </Route>
        <RecruiterRoute path={`${path}/create-jobs`} component={CreateView} />
        <RecruiterRoute path={`${path}/plans`} component={PlansView} />
        <RecruiterRoute path={`${path}/applications`} component={ApplicationsView} />        
        <RecruiterRoute path={`${path}/buy-plans`} component={BuyPlansView} />
      </Switch>
    </Fragment>
  );
};
