import React from "react";
import { Form } from "react-bootstrap";

const ListeClientDropDown = ({ listeClient, setClientId }) => {
  const handleItemChange = (e) => {
    setClientId(e.target.id);
  };
  return (
    <Form.Group controlId="exampleForm.ControlSelect2">
      <Form.Label>Liste des clients</Form.Label>
      <Form.Control as="select" multiple>
        {listeClient.map((el) => (
          <option
            id={el._id}
            onClick={handleItemChange}
          >{`${el.nom} ${el.prenom}`}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default ListeClientDropDown;
