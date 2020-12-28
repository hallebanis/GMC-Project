import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../actions/authentification/authActions";

const Register = ({ history }) => {
  const [info, setinfo] = useState({
    CIN: "",
    matricule: "",
    login: "",
    password: "",
  });

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) history.push(`/user-dashboard/${auth.user._id}`);
  }, [auth.isAuth]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setinfo({ ...info, [e.target.name]: e.target.value });
  };

  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerAction(info));
  };
  return (
    <div>
      <div>
        CIN :<input type="text" name="CIN" onChange={handleChange}></input>
      </div>
      <div>
        matricule:
        <input type="text" name="matricule" onChange={handleChange}></input>
      </div>
      <div>
        <input type="text" name="login" onChange={handleChange}></input>
      </div>
      <div>
        <input type="password" name="password" onChange={handleChange} />
      </div>

      <div>
        <button onClick={registerNow}>REGISTER</button>
      </div>
    </div>
  );
};

export default Register;
