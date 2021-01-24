import React, { Component, useEffect, useState } from "react";
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInput,
} from "mdbreact";
/* reference,
    designation,
    etat,
    prixAchatHT,
    prixVenteHT,
    qteStock,
    idCategorie,
    tva, */
import { useDispatch, useSelector } from "react-redux";

import { updateClient } from "../../actions/GV/venteActions";
import { addProduit, getCategorie, getProduit } from "../../actions/GA/achatActions";
import { Form } from "react-bootstrap";

const AjoutModale = () => {
    const dispatch = useDispatch()
   
    const achat = useSelector(state => state.achat)
    const [modal8, setModal8] = useState(false);
    const [info, setInfo] = useState({
        reference: "",
        designation: "",
        etat: "en stock",
        prixAchatHT: 0,
        prixVenteHT: 0,
        qteStock: 0,
        idCategorie: "6000a7515585314d50c66fc1",
        tva: 0,
    })
    const toggle = () => {
        setInfo(
            {
                reference: "",
                designation: "",
                etat: "en stock",
                prixAchatHT: 0,
                prixVenteHT: 0,
                qteStock: 0,
                idCategorie: "6000a7515585314d50c66fc1",
                tva: 0,
            }
        )
        setModal8(!modal8);
    }
    const handleStringChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleNumericChange = (e) => {
        if (typeof (e.target.value) !== NaN)
            setInfo({ ...info, [e.target.name]: +e.target.value })
        else setInfo(info)
    }
    const handleSave = () => {
        dispatch(addProduit(info))
        toggle()
        dispatch(getProduit())
        
    }
    return (
        <MDBContainer>
            <MDBBtn color="info" onClick={toggle}>
                New Product
      </MDBBtn>
            <MDBModal isOpen={modal8} toggle={toggle} fullHeight position="right">
                <MDBModalHeader toggle={toggle}>New Product</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput value={info.reference}
                        name="reference"
                        label="Reference" onChange={handleStringChange}
                    ></MDBInput>
                    <MDBInput value={info.designation}
                        name="designation"
                        label="Designation" onChange={handleStringChange}
                    ></MDBInput>
                    <Form.Group>
                        <Form.Control as="select" size="lg">
                            <option name="etat" onClick={(e) => setInfo({ ...info, etat: e.target.text })}>en stock</option>
                            <option name="etat" onClick={(e) => setInfo({ ...info, etat: e.target.text })}>hors stock</option>
                        </Form.Control>
                    </Form.Group>
                    <MDBInput value={info.prixAchatHT}
                        name="prixAchatHT"
                        label="PrixAchatHT" onChange={handleNumericChange}
                    ></MDBInput>
                    <MDBInput value={info.prixVenteHT}
                        name="prixVenteHT"
                        label="PrixVenteHT" onChange={handleNumericChange}
                    ></MDBInput>
                    <MDBInput value={info.qteStock}
                        name="qteStock"
                        label="QteStock" onChange={handleNumericChange}
                    ></MDBInput>
                    <Form.Group>
                        <Form.Control as="select" size="lg">
                            {achat.categorie.map(el => <option id={el._id} name="idCategorie" onClick={(e)=>setInfo({...info,idCategorie:e.target.id})} >{el.designation}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <MDBInput value={info.tva}
                        name="tva"
                        label="TVA" onChange={handleNumericChange}
                    ></MDBInput>

                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>
                        Close
          </MDBBtn>
                    <MDBBtn color="primary" onClick={handleSave} >
                        Save changes
          </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
};

export default AjoutModale;
