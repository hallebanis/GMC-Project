import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorie } from "../../actions/GA/achatActions";

const GaDashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCategorie()), []);
  return (
    <div>
      <h1>ga Dashboard</h1>
      <Link to="/ga-dashboard/produits">Produits</Link>
    </div>
  );
};

export default GaDashboard;
