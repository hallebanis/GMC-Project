import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import { ServiceForm } from "../../components/GRH/ServiceForm";

export const AddServicePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <AdminDashboardSidebar
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
                categorie: "Service",
                elements: [
                  {
                    title: "Add Service",
                    link: "/grh-dashboard/AddService",
                  },
                  {
                    title: "List Service",
                    link: "/grh-dashboard/ListService",
                  },
                ],
              },
            ]}
          />
        </Col>
        <Col>
          <ServiceForm />
        </Col>
      </Row>
    </Container>
  );
};
