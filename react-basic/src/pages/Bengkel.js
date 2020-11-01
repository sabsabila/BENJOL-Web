import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form, FormControl,
  Row,
  Col,
  Media, Image,
} 

from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import bengkel from '../data/bengkel';

const Spareparts = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sparepart, setSparepart] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_FILMS)
      .then((res) => {
        setLoading(false);
        setSparepart(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);

  return (
    <div className="benjol-bg-sm">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/dashboard">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Form inline expand="md" >
            <Form.Control style={{width: 400}} type="text" placeholder="Cari bengkel" size="sm" className="mb-1 mr-sm-1 rounded-pill" />
            <Button size="sm" className="button-custom fa fa-search rounded-pill mr-sm-5" type="submit">Search</Button>
          </Form>
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/ourpartners" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ paddingTop: 100 }}>
      <Button size="sm" className="button-custom center-block rounded-pill" href="ourpartners" type="submit">Join Us!</Button>
        <Row>
          {bengkel.map((item, key) => {
          return (
            <Col md="3" key={key}>
              <Media style={{ paddingTop: 30 }}>
                <img variant='rounded' width={90} height={90} src={item.src} />
                <Media.Body>
                  <h6 style={{ paddingLeft: 10, fontSize: 18, fontWeight: "bold"}}>{item.judul}</h6>
                  <p style={{ paddingLeft: 10, fontSize: 12}}>{item.address}</p>
                  <p style={{ paddingLeft: 10, fontSize: 12}}>{item.number}</p>
                </Media.Body>
              </Media>
            </Col>
          );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Spareparts;
