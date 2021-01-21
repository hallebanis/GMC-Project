import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getClient } from "../../actions/GV/venteActions";

const Commande = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
  }, []);
  return <Form></Form>;
};

export default Commande;
