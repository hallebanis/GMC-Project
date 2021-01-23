import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorie } from "../../actions/GA/achatActions";

const GaDashboard = () => {
  const dispatch = useDispatch()
  useEffect(()=>dispatch(getCategorie()),[])
  return (
    <div>
      <h1>ga Dashboard</h1>
      <Link to="/ga-dashboard/produits">Produits</Link>
    </div>
  );
};

export default GaDashboard;
