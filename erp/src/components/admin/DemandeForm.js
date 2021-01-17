import React from "react";
import { Container, Form } from "react-bootstrap";
import {
  MDBBadge,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdbreact";

const DemandeForm = () => {
  return (
    <Container>
      <Form>
        <Form.Row>
          <MDBBadge color="primary">Sujet :</MDBBadge>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              Select
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>Action</MDBDropdownItem>
              <MDBDropdownItem>Another Action</MDBDropdownItem>
              <MDBDropdownItem>Something else here</MDBDropdownItem>
              <MDBDropdownItem divider />
              <MDBDropdownItem>Separated link</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default DemandeForm;
