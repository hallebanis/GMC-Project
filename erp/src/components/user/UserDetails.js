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

const UserDetails = ({ userDetails }) => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCard
          border="primary"
          className="m-1"
          style={{ width: "100vw", maxWidth: "200rem" }}
        >
          <MDBCardHeader>{`${userDetails.personnelId.nom} ${userDetails.personnelId.prenom}`}</MDBCardHeader>
          <MDBCardBody className="text-primary">
            <MDBCardTitle tag="h5">Personal Info</MDBCardTitle>
            <MDBCardText>
              Matricule : {userDetails.personnelId.matricule}
            </MDBCardText>
            <MDBCardText>LOGIN : {userDetails.login}</MDBCardText>
            <MDBCardText>Permission : {userDetails.role.titre}</MDBCardText>
            <MDBCardText>
              Date Naissance : {userDetails.personnelId.dateDeNaissance}
            </MDBCardText>
            <MDBCardText>
              Lieu Nassance : {userDetails.personnelId.lieuDeNaissance}
            </MDBCardText>
            <MDBCardText>
              Matricule CNSS : {userDetails.personnelId.matCnss}
            </MDBCardText>
            <MDBCardText>
              Situation Familiale : {userDetails.personnelId.situationFamiliale}
            </MDBCardText>
            <MDBCardText>
              Nombre d'enfants : {userDetails.personnelId.nombreEnfants}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserDetails;
