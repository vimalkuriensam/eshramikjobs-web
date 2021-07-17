import React, { Fragment } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";

import {
  Jobs as JobsView,
  Applied as AppliedView,
  Recommended as RecommendedView,
  Saved as SavedView,
} from "../../pages";

export const JobsChildView = () => {
  const { path, url } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route exact path={path} component={JobsView} />
        <Route path={`${path}/applied`} component={AppliedView} />
        <Route path={`${path}/recommended`} component={RecommendedView} />
        <Route path={`${path}/saved`} component={SavedView} />
      </Switch>
    </Fragment>
  );
};
