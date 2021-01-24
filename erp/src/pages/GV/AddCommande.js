import React, { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import ListeProduitDropDown from "../../components/GV/ListProduitDropDown";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCommandeVente,
  addLigneVente,
  getClient,
  getCommandeVente,
  getProduitsVente,
} from "../../actions/GV/venteActions";
import MainNavBar from "../../components/admin/MainNavBar";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ListeClientDropDown from "../../components/GV/ListeClientDropDown";
import mongoose from "mongoose";
import GvSidebar from "../../components/GV/GvSidebar";
const AddCommand = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
    dispatch(getProduitsVente());
    dispatch(getCommandeVente());
  }, [dispatch]);
  const vente = useSelector((state) => state.vente);
  const [ProductFilter, setProductFilter] = useState("");
  const [clientFilter, setClientFilter] = useState("");
  const setNumFacture = () => {
    if (vente.commandeVente.length > 0)
      return vente.commandeVente[vente.commandeVente.length - 1].numero + 1;
    else return 1;
  };

  const [info, setInfo] = useState({
    _id: mongoose.Types.ObjectId().toString(),
    numero: setNumFacture(),
    total: 0,
    isValidate: false,
    clientId: "",
  });

  const [listeLigneVente, setlisteLigneVente] = useState([
    {
      id: nextId(),
      quantité: 0,
      sousTotal: 0,
      produitId: "",
      commandeId: info._id,
      pu: 0,
    },
  ]);

  const setClientId = (val) => {
    setInfo({ ...info, clientId: val, numero: setNumFacture() });
  };

  const addLigne = () => {
    setlisteLigneVente([
      ...listeLigneVente,
      {
        id: nextId(),
        quantité: 0,
        sousTotal: 0,
        produitId: "",
        commandeId: info._id,
      },
    ]);
  };

  const handleQteChange = (e) => {
    setlisteLigneVente(
      listeLigneVente.map((el) => {
        if (el.id === e.target.id)
          return {
            ...el,
            quantité: +e.target.value,
            sousTotal: +e.target.value * el.pu,
          };
        return el;
      })
    );
  };
  const handleDeleteLigne = (e) => {
    setlisteLigneVente(listeLigneVente.filter((el) => el.id !== e.target.id));
  };
  const handleCancel = () => {
    setlisteLigneVente([]);
    history.goBack();
  };
  const handelSave = () => {
    setInfo({ ...info, numero: setNumFacture(), total: totalCalc() });
    dispatch(AddCommandeVente(info));
    listeLigneVente.map((el) => dispatch(addLigneVente(el)));
    history.goBack();
  };

  const totalCalc = () => {
    let sum = 0;
    if (listeLigneVente.length > 0)
      listeLigneVente.map((el) => (sum += el.sousTotal));
    return sum;
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar />
        </Col>
      </Row>
      <Row>
        <Col md={3} style={{ height: "90vh" }}>
          {" "}
          <GvSidebar />
        </Col>
        <Col>
          <MDBInput
            label="CLient Filter"
            onChange={(e) => setClientFilter(e.target.value)}
          />
          <ListeClientDropDown
            listeClient={vente.client.filter(
              (el) =>
                el.nom
                  .toUpperCase()
                  .trim()
                  .includes(clientFilter.toUpperCase().trim()) ||
                el.prenom
                  .toUpperCase()
                  .trim()
                  .includes(clientFilter.toUpperCase().trim())
            )}
            setClientId={setClientId}
          />
          <h2>commande Num : {info.numero}</h2>
          <Table>
            <thead>
              <th>Produit</th>
              <th>Qte</th>
              <th>P.U</th>
              <th>S.TOTAL</th>
            </thead>
            <tbody>
              {listeLigneVente.map((el) => (
                <tr>
                  <td>
                    <ListeProduitDropDown
                      id={el.id}
                      listeProduit={vente.produit.filter((el) =>
                        el.designation
                          .toUpperCase()
                          .trim()
                          .includes(ProductFilter.toUpperCase().trim())
                      )}
                      setlisteLigneVente={setlisteLigneVente}
                      listeLigneVente={listeLigneVente}
                    />
                  </td>
                  <td>
                    <MDBInput
                      id={el.id}
                      name="quantité"
                      value={el.quantité}
                      onChange={handleQteChange}
                    />
                  </td>
                  <td>
                    <MDBInput disabled={true} name="PU" value={el.pu} />
                  </td>
                  <td>
                    <MDBInput
                      name="sousTotal"
                      disabled={true}
                      value={el.sousTotal}
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      id={el.id}
                      onClick={handleDeleteLigne}
                    >
                      del
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h4>TOTAL :</h4>
                  {totalCalc()}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button variant="primary" onClick={handelSave}>
                    save
                  </Button>
                  <Button variant="danger" onClick={handleCancel}>
                    cancel
                  </Button>
                </td>
              </tr>
            </tbody>
            <MDBInput
              label="Product Filter"
              onChange={(e) => setProductFilter(e.target.value)}
            />
            <Button variant="primary" onClick={addLigne}>
              Add
            </Button>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCommand;
