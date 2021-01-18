import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCardHeader,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

const UserDetails = ({ UserDetails }) => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCard border="primary" className="m-3" style={{ maxWidth: "18rem" }}>
          <MDBCardHeader>
            {UserDetails && UserDetails.personnelId.nom}
          </MDBCardHeader>
          <MDBCardBody className="text-primary">
            <MDBCardTitle tag="h5">Primary card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserDetails;
