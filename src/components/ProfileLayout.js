import React from "react";
import {Navigate, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import EditPage from "./EditPage";
import Profile from "./Profile";

const ProfileLayout = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path + "/profile"} component={Profile} />
        <Route path={path + "/edit"} exact component={EditPage} />
        <Navigate from={path} to={path + "/profile"} />
      </Switch>
    </>
  );
};

export default ProfileLayout;
