import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/authentification/authActions";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

export const Login = ({ history }) => {
  const [info, setInfo] = useState({
    login: "",
    password: "",
  });
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(info));
  };

  useEffect(() => {
    if (auth.user) {
      switch (auth.user.role.titre) {
        case "user":
          history.push(`/user-dashboard/${auth.user._id}`);
          break;
        case "admin":
          history.push(`/admin-dashboard`);
          break;
        case "resVente":
          history.push("/gv-dashboard");
          break;
        case "resAchat":
          history.push("/ga-dashboard");
          break;
        case "GRH":
          history.push("/grh-dashboard");
          break;
        default:
          history.push("/");
          break;
      }
    }
  }, [auth.user, history]);
  return (
    <MDBRow>
      <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3">
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="dark-grey-text mb-5">
                <strong>Sign in</strong>
              </h3>
            </div>
            <MDBInput
              label="Your login"
              onChange={handleChange}
              name="login"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your password"
              name="password"
              onChange={handleChange}
              group
              type="password"
              validate
              containerClass="mb-0"
            />

            <div className="text-center pt-3 mb-3">
              <MDBBtn
                type="button"
                onClick={handleLogin}
                gradient="blue"
                rounded
                className="btn-block z-depth-1a"
              >
                Sign in
              </MDBBtn>
              {auth.errors
                ? auth.errors.map((el, i) => (
                    <h3 id={i} className="errorTitle">
                      {el.msg}
                    </h3>
                  ))
                : null}
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Login;
