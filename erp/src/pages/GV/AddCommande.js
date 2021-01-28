import React, { useEffect, useState } from "react";
import { MDBInput } from "mdbreact";
import ListeProduitDropDown from "../../components/GV/ListProduitDropDown";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { verifyNumber } from "../../helpers/verifyNumber";
import {
  AddCommandeVente,
  addLigneVente,
  getClient,
  getCommandeVente,
  getProduitsVente,
} from "../../actions/GV/venteActions";
import { MdAddCircleOutline } from "react-icons/md";
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
  const [changeEnable, setChangeEnable] = useState(false);
  const vente = useSelector((state) => state.vente);
  const [ProductFilter, setProductFilter] = useState("");
  const [clientFilter, setClientFilter] = useState("");
  const setNumFacture = () => {
    if (vente.commandeVente.length > 0)
      return vente.commandeVente[vente.commandeVente.length - 1].numero + 1;
    else return 1;
  };
  let date = new Date(Date.now());
  const [info, setInfo] = useState({
    _id: mongoose.Types.ObjectId().toString(),
    numero: 0,
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
      enableChange: false,
      designation: "",
    },
  ]);
  const [clientSelected, setClientSelected] = useState(false);

  const setClientId = (val) => {
    setChangeEnable(true);
    setInfo({ ...info, clientId: val, numero: setNumFacture() });
    setClientSelected(true);
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
        pu: 0,
        enableChange: false,
      },
    ]);
  };

  const handleQteChange = (e) => {
    e.target.value = verifyNumber(e.target.value);
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
    console.log(e.target.id);
    if (listeLigneVente.length > 1)
      setlisteLigneVente(listeLigneVente.filter((el) => el.id !== e.target.id));
  };
  const handleCancel = () => {
    setlisteLigneVente([]);
    history.goBack();
  };
  const handelSave = () => {
    setInfo({ ...info, numero: setNumFacture(), total: totalCalc() });
    if (totalCalc() > 0) {
      dispatch(AddCommandeVente(info));
      listeLigneVente.map((el) => {
        if (el.quantité > 0) dispatch(addLigneVente(el));
        return el;
      });
      history.goBack();
    } else
      alert(
        `La Commande ne contient aucune ligne achat 
              elle ne sera pas sauvegarder`
      );
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
        <Col style={{ overflow: "scroll", height: "90vh" }}>
          <h3>{`Date: ${date.toDateString()}`}</h3>
          {!clientSelected && (
            <ListeClientDropDown
              setClientFilter={setClientFilter}
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
          )}
          <h3>
            {clientSelected &&
              `Client : ${
                vente.client.filter((el) => el._id === info.clientId)[0].nom
              } ${
                vente.client.filter((el) => el._id === info.clientId)[0].prenom
              }`}
          </h3>
          <div className="factureTitle">
            Commande Num : {info.numero || "#"}
          </div>
          <Table>
            <thead>
              <th></th>
              <th>Produit</th>
              <th>Qte</th>
              <th>P.U</th>
              <th>S.TOTAL</th>
            </thead>
            <tbody>
              {listeLigneVente.map((el, i) => (
                <tr>
                  <td>
                    {i === listeLigneVente.length - 1 && (
                      <Button id={i} variant="primary" onClick={addLigne}>
                        <MdAddCircleOutline />
                      </Button>
                    )}
                  </td>
                  <td>
                    <ListeProduitDropDown
                      value={el.designation}
                      setProductFilter={setProductFilter}
                      disabled={!changeEnable}
                      id={el.id}
                      listeProduit={vente.produit.filter(
                        (el) =>
                          el.designation
                            .toUpperCase()
                            .trim()
                            .includes(ProductFilter.toUpperCase().trim()) &&
                          !listeLigneVente.some(
                            (elm) => elm.produitId === el._id
                          )
                      )}
                      setlisteLigneVente={setlisteLigneVente}
                      listeLigneVente={listeLigneVente}
                    />
                  </td>
                  <td>
                    <MDBInput
                      disabled={!el.enableChange}
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
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCommand;
