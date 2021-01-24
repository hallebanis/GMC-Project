import { Link } from "@material-ui/core";
import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeVente } from "../../actions/GV/venteActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GvSidebar from "../../components/GV/GvSidebar";
import ListeCommandes from "../../components/GV/ListeCommandes";

const Commande = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    //dispatch(getClient());
    dispatch(getCommandeVente());
  }, []);

  useEffect(() => {
    if (!auth.isAuth) history.push("/");
  }, [history, auth]);

  const vente = useSelector((state) => state.vente);
  return (
    <Container fluid>
      <Row>
        {" "}
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{height:"90vh"}}>
          <GvSidebar />
        </Col>
        <Col>
          <ListeCommandes commandList={vente.commandeVente} />

          <Button
            variant="primary"
            onClick={() => history.push("/gv-dashboard/commande/addCommande")}
          >
            New Command
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Commande;
