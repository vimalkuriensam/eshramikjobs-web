import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import {
  Jobs as JobsView,
  Applied as AppliedView,
  Recommended as RecommendedView,
  Saved as SavedView,
  Create as CreateJobs,
} from "../../pages";
import AdminRoute from "../AdminRoute";
import UserRoute from "../UserRoute";

export const JobsChildView = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={JobsView} />
        <UserRoute path={`${path}/applied`} component={AppliedView} />
        <UserRoute path={`${path}/recommended`} component={RecommendedView} />
        <UserRoute path={`${path}/saved`} component={SavedView} />
        <AdminRoute path={`${path}/create`} component={CreateJobs} />
      </Switch>
    </Fragment>
  );
};
