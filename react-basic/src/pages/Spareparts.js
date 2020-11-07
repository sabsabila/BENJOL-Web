import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form, FormControl,
  Jumbotron,
  Row,
  Col,
  Spinner,
  Alert,
  Card,

} 

from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_SPAREPART } from "constants/urls";
import image from '../images/motor.png';
import spareparts from '../data/spareparts';

const Spareparts = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sparepart, setSparepart] = React.useState();

    React.useEffect(() => {
    axios
      .get(GET_SPAREPART,{
        headers:{
          
        }
      })
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
          <Nav className="ml-auto benjol-brand">
          <Form inline expand="lg">
            <Form.Control type="text" placeholder="Cari sparepart" size="sm" className="mb-1 mr-sm-1 rounded-pill" style={{ width: 400 }} />
            <Button size="sm" className="button-custom fa fa-search rounded-pill mr-sm-5" type="submit">Search</Button>
          </Form>
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/ourpartners" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <Container>
        <br /><br /><br />
       {loading ? (
          <Row>
            <Col>
              <Spinner
                animation="border"
                variant="primary"
                className="d-flex justify-content-center ml-auto mr-auto"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : sparepart ? (
          sparepart
            .reduce(function (accumulator, currentValue, currentIndex, array) {
              if (currentIndex % 5 === 0)
                accumulator.push(array.slice(currentIndex, currentIndex + 5));
              return accumulator;
            }, [])
            .map((p) => {
              return (
                <Row className="mb-4">
                  {p.map((value) => {
                    return (
                      <Col md="2">
                <Card className="mb-4 box-shadow">
                  <Card.Body>
                  <Card.Img top width="100%" src={image} alt="sparepart" />
                  <Card.Text>{value.name}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button outline className="button-custom" size="sm">
                      View
                    </Button>
                    <small className="text-muted">
                      {value.price}
                    </small>
                  </div>
                  </Card.Body>
                </Card>
            </Col>
                    );
                  })}
                </Row>
              );
            })
        ) : (
          error && <Alert variant="danger">Error bang</Alert>
        )}
      </Container>
    </div>
  );
};

export default Spareparts;
