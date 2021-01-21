import { MDBInput } from "mdbreact";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClient } from "../../actions/GV/venteActions";
import Client from "../../components/GV/Client";
import FiltredClientList from "./FiltredClientList";

const ListeClients = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
  }, []);
  const vente = useSelector((state) => state.vente);
  const [filter, setFilter] = useState("");
  return (
    <div>
      <MDBInput label="Filter" onChange={(e) => setFilter(e.target.value)} />
      <FiltredClientList
        clientList={vente.client.filter(
          (el) =>
            el.nom.toUpperCase().includes(filter.toUpperCase()) ||
            el.prenom.toUpperCase().includes(filter.toUpperCase())||
            el.email.toUpperCase().includes(filter.toUpperCase())
        )}
      />
    </div>
  );
};

export default ListeClients;
