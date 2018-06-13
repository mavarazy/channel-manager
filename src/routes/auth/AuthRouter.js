import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthLogin from "./AuthLogin";
import AuthLogout from "./AuthLogout";
import AuthRegister from "./AuthRegister";

const AuthRouter = () => (
  <div className="hero is-fullwidth is-fullheight">
    <div className="hero-body">
      <div className="container">
        <Switch>
          <Route path="/auth" component={AuthLogin} exact/>
          <Route path="/auth/register" component={AuthRegister}/>
          <Route path="/auth/logout" component={AuthLogout}/>
        </Switch>
      </div>
    </div>
  </div>
);

export default AuthRouter;