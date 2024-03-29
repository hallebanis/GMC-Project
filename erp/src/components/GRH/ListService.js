import React, { useEffect } from "react";
import { Button, Container, Navbar, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { deleteService, loadService } from "../../actions/GRH/personnelActions";
import ServiceModal from "./ServiceModal";

export const ListService = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadService());
  }, [dispatch]);

  const personnel = useSelector((state) => state.personnel);
  const { service } = personnel;
  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">List Of Services</Navbar.Brand>
      </Navbar>
      <Table hover striped bordered>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Responsable</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {service.map((el, i) => (
            <tr id={i}>
              <td id={el._id}>{el._id}</td>
              <td id={`1-${i}`}>{el.nom}</td>
              <td
                id={`1-${i}`}
              >{`${el.responsable.nom} ${el.responsable.prenom}`}</td>
              <td>
                <ServiceModal service={el} />
                <Button variant="danger" onClick={() => handleDelete(el._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
