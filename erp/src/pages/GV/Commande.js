import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommandeVente } from "../../actions/GV/venteActions";
import MainNavBar from "../../components/admin/MainNavBar";
import GvSidebar from "../../components/GV/GvSidebar";
import ListeCommandes from "../../components/GV/ListeCommandes";

const Commande = ({ history, location }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getClient());
    dispatch(getCommandeVente());
  }, [dispatch]);

  useEffect(() => {
    if (!auth.isAuth) history.push("/");
  }, [history, auth]);
  const vente = useSelector((state) => state.vente);
  useEffect(() => {}, [vente.commandeVente]);

  const [selectedItem, setSelectedItem] = useState("");
  const [list, setList] = useState(vente.commandeVente);
  const handleEtatChange = (e) => {
    setSelectedItem(e.target.text);
    switch (e.target.id) {
      case "2":
        setList(vente.commandeVente.filter((el) => el.isValidate));
        break;
      case "3":
        setList(vente.commandeVente.filter((el) => !el.isValidate));
        break;
      case "1":
        setList(vente.commandeVente);
        break;
      default:
        setList(vente.commandeVente);
        break;
    }
  };
  return (
    <Container fluid>
      <Row>
        {" "}
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          <GvSidebar />
        </Col>
        <Col className="dataCol">
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem || "Filter By Etat"}
          >
            <Dropdown.Item onClick={handleEtatChange} id="1" href="#">
              Tout
            </Dropdown.Item>
            <Dropdown.Item onClick={handleEtatChange} id="2" href="#">
              validé
            </Dropdown.Item>
            <Dropdown.Item onClick={handleEtatChange} id="3" href="#">
              Non Validé
            </Dropdown.Item>
          </DropdownButton>
          <ListeCommandes
            commandList={list}
            history={history}
            location={location}
          />

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
