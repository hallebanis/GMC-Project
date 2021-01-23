import React from "react";
import { Button, Col, Container,Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteClient } from "../../actions/GV/venteActions";
import EditClientModal from "./EditClientModal";

const Client = ({ client }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteClient(id));
    };
    return (
        <>
            <td>{client.nom}</td>
            <td>{client.prenom}</td>
            <td>{client.email}</td>
            <td>
                <Container>
                    <Row><Col md={2}><EditClientModal client={client} /></Col><Col  md={2}><Button variant="danger" onClick={() => handleDelete(client._id)}>
                        Delete
                    </Button></Col></Row>
                    
                    
                </Container >
            </td>
        </>
    );
};

export default Client;
