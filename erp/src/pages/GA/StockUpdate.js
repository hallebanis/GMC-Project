import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProduit } from "../../actions/GA/achatActions";
import UpdateProduitModal from "../../components/GA/UpdateProduitModal";

const StockUpdate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduit());
  }, [dispatch]);
  const achat = useSelector((state) => state.achat);
  /* const [info, setInfo] = useState({
    id: "",
    prixAchatHT: 0,
    prixVenteHT: 0,
    qteStock: 0,
  }); */
  return (
    <MDBCard>
      <MDBCardTitle>Liste des produits</MDBCardTitle>
      <MDBCardBody>
        <Table>
          <thead>
            <th>Designation</th>
            <th>Prix de Vente HT</th>
            <th>Quantite en stock</th>
            <th>Categorie</th>
            {/*    <th>Fournisseur</th> */}
            <th>Delete</th>
          </thead>
          <tbody>
            {achat.produit.map((el, i) => (
              <tr id={i}>
                <td id={i + 10}>{el.designation}</td>
                <td id={i + 11}>{el.prixVenteHT}</td>
                <td id={i + 12}>{el.qteStock}</td>
                <td id={i + 13}>{el.idCategorie.designation}</td>
                <td>
                  <UpdateProduitModal produit={el} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MDBCardBody>
    </MDBCard>
  );
};

export default StockUpdate;
