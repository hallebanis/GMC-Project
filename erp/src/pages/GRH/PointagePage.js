import { MDBInput } from "mdbreact";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import MainNavBar from "../../components/admin/MainNavBar";
import ListePointage from "../../components/GRH/ListePointage";
import { NavSide } from "../../components/GRH/NavSide";

const PointagePage = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuth) history.push("/login");
  }, [auth, history]);
  const [filter, setFilter] = useState("");
  const [modified, setModified] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, [dispatch]);
  const personnel = useSelector((state) => state.personnel);
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainNavBar></MainNavBar>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <NavSide />
        </Col>
        <Col>
          <MDBInput
            label="Filter"
            size="sm"
            onChange={(e) => setFilter(e.target.value)}
          />
          <ListePointage
            modified={modified}
            setModified={setModified}
            personnelList={personnel.personnel.filter(
              (el) =>
                el.nom.toLowerCase().includes(filter.toLowerCase()) ||
                el.prenom.toLowerCase().includes(filter.toLowerCase()) ||
                el.matricule.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PointagePage;
