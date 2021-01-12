import React ,{useState}from "react";
import {useDispatch} from 'react-redux'
import { Form, Button, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Select } from "./DatePicker";
import {addPersonnel} from '../../actions/GRH/personnelActions'

export const AddPersonnelForm = () => {
  
  const concatination = (nom , CIN)=> nom + '  ' + CIN;
  const [info, setInfo] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch()
  const handleSave =() =>{
      dispatch(addPersonnel(info))

  }
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control  onChange={handleChange}
              name="nom"
              type="text"
              placeholder="Enter votre Nom"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Prenom</Form.Label>
            <Form.Control onChange={handleChange}
              name="prenom"
              type="text"
              placeholder="Entrer votre Prenom"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CIN</Form.Label>
            <Form.Control onChange={handleChange}
              name="CIN"
              type="text"
              placeholder="Entrer votre CIN"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={handleChange}
              name="email"
              type="email"
              placeholder="entrer email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Adresse</Form.Label>
            <Form.Control onChange={handleChange}
              name="adresse"
              type="text"
              placeholder="Enter votre addresse"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lieu de naissance</Form.Label>
            <Form.Control onChange={handleChange}
              name="lieuDeNaissance"
              type="text"
              placeholder="Entrer lieu de naissance"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Matricule Cnss </Form.Label>
            <Form.Control onChange={handleChange}
              name="matCnss"
              type="text"
              placeholder="Enter matricule cnss"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nombre d'enfants</Form.Label>
            <Form.Control onChange={(e)=>setInfo({...info,[e.target.name]:+e.target.value})}
              name="nombreEnfants"
              type="text"
              placeholder="entrer le nombre d'enfants"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Situation familiale</Form.Label>
            <Form.Control onChange={handleChange}
              name="situationFamiliale"
              type="texte"
              placeholder="Enter votre situation familiale"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Categorie</Form.Label>
            <DropdownButton
              id="dropdown-basic-button"
              title="choisir categorie"
            >
              <Dropdown.Item>A</Dropdown.Item>
              <Dropdown.Item>B</Dropdown.Item>
              <Dropdown.Item>C</Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Date de naissance : <Select name="dateDeNaissance"  onClick={()=>console.log(value)}/>
            </Form.Label>
          </Form.Group>
        </Form.Row>

        <Button variant="primary"  onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </div>
  );
};