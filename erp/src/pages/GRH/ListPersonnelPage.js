import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ListPersonnel } from "../../components/GRH/ListPersonnel";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";
import { Container, Table, Row, Col } from "react-bootstrap";

export const ListPersonnelPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);
  const personnel = useSelector((state) => state.personnel);
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          {" "}
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
          <ListPersonnel list={personnel} />
        </Col>
      </Row>
    </Container>
  );
};
