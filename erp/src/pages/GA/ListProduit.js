import React from 'react'
import { Row, Table } from 'react-bootstrap'

function ListProduit({ listProduit }) {
    /*  designation
 prixVenteHT
 qteStock
 idCategorie */
    return (
        <Table>
            <thead>
                <th>Designation</th>
                <th>Prix de Vente HT</th>
                <th>Quantite en stock</th>
                <th>Categorie</th>
            </thead>
            <tbody>{listProduit.map(el => <row>
                <td>{el.designation}</td>
                <td>{el.prixVenteHT}</td>
                <td>{el.qteStock}</td>
                <td>{el.idCategorie}</td>
            </row>
            )}
            </tbody>
        </Table>
    )
}

export default ListProduit
