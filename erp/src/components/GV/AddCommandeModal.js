import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import ListeProduitDropDown from "./ListProduitDropDown";

import { useDispatch, useSelector } from "react-redux";
import ListeClientDropDown from "./ListeClientDropDown";
import { getClient, getProduitsVente } from "../../actions/GV/venteActions";
import { Button, Form, Table } from "react-bootstrap";

const AddCommandeModal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient());
    dispatch(getProduitsVente());
  }, []);
  const vente = useSelector((state) => state.vente);
  const setNumFacture = () => {
    if (vente.commandeVente.length > 0)
      return vente.commandeVente[vente.commandeVente.length - 1].numero + 1;
  };

  const [info, setInfo] = useState({
    numero: 1,
    total: 0,
    isValidate: false,
    clientId: "",
  });
  const [modal8, setModal8] = useState(false);
  const [clientFilter, setClientFilter] = useState("");
  const [ligneVente, setLigneVente] = useState({
    quantité: 0,
    sousTotal: 0,
    produitId: "",
    commandeId: "",
  });
  const [listeLigneVente, setlisteLigneVente] = useState([
    {
      quantité: 0,
      sousTotal: 0,
      produitId: "",
      commandeId: "",
    },
  ]);

  const toggle = () => {
    setModal8(!modal8);
  };
  const setClientId = (val) => {
    setInfo({ ...info, clientId: val });
  };

  const setProduitId = (val) => {
    setLigneVente({ ...ligneVente, produitId: val });
  };
  const [ProductFilter, setProductFilter] = useState("");
  const addLigneVente = () => {
    setLigneVente({
      quantité: 0,
      sousTotal: 0,
      produitId: "",
      commandeId: "",
    });
    setlisteLigneVente([...listeLigneVente, ligneVente]);
  };
  return (
    <MDBContainer fluid>
      <MDBBtn color="info" onClick={toggle}>
        Edit
      </MDBBtn>
      <MDBModal
        className="modal-dialog modal-dialog-scrollable"
        isOpen={modal8}
        toggle={toggle}
        fullHeight
        position="left"
      >
        <MDBModalHeader toggle={toggle}>New Command</MDBModalHeader>
        <MDBModalBody>
          <Form inline>
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
                        listeProduit={vente.produit.filter((el) =>
                          el.designation
                            .toUpperCase()
                            .trim()
                            .includes(ProductFilter.toUpperCase().trim())
                        )}
                        setProduitId={setProduitId}
                      />
                    </td>
                    <td>
                      <MDBInput type="number" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
              <MDBInput
                label="Product Filter"
                onChange={(e) => setProductFilter(e.target.value)}
              />
              <Button variant="primary" onClick={addLigneVente}>
                Add
              </Button>
            </Table>
          </Form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default AddCommandeModal;
