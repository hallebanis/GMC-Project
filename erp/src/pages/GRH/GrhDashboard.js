import React from "react";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";
import { DiplomeForm } from "../../components/GRH/DiplomeForm";
import { ContratForm } from "../../components/GRH/ContratForm";
import { ServiceForm } from "../../components/GRH/ServiceForm";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";

export const GrhDashboard = () => {
  return (
    <Container fluid>
      <Row md="auto">
        <Col>
          <AdminDashboardSidebar
            color="blue"
            linkList={[
              {
                categorie: "Personnel",
                elements: [
                  {
                    title: "Add Personnel",
                    link: "/grh-dashboard/addpersonnel",
                  },
                  {
                    title: "personnel list",
                    link: "/grh-dashboard/listpersonnel",
                  },
                ],
              },
              {
                categorie: "Contrat",
                elements: [
                  {
                    title: "Add Contrat",
                    link: "/grh-dashboard/contrat",
                  },
                ],
              },
              {
                categorie : "Service",
                elements :[
                  {
                    title:"Add Service",
                    link : "/grh-dashboard/AddService"
                  },
                  {
                   title:"List Service",
                   link :"/grh-dashboard/ListService"
                  }]},
                  {
                    categorie : "Avance",
                    elements : [
                      {
                        title:"Add Avance",
                        link:"/grh-dashboard/AddAvance"
                      },
                      {
                        title:"List Avance",
                        link:"/grh-dashboard/ListAvance"
                      }
                    ]
                  }
                  
                  
                
                
              
              
            ]}
          />
        </Col>
        <Col></Col>
      </Row>
      
     
    </Container>
  );
};
export default GrhDashboard;
