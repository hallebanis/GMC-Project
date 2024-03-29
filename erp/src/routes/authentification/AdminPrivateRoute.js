import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default AdminPrivateRoute;
