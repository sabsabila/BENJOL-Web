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

} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import image from '../images/bawah.png';
import spareparts from '../data/spareparts';

const Spareparts = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();

  React.useEffect(() => {
    axios
      .get(GET_FILMS)
      .then((res) => {
        setLoading(false);
        setFilm(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.warn(err);
      });
    return () => {};
  }, []);

  return (
    <div>
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/dashboard">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
          <Form inline expand="md" >
            <Form.Control type="text" placeholder="Cari bengkel..." size="sm" className="mb-1 mr-sm-1 rounded-pill" />
            <Button size="sm" className="button-custom fa fa-search rounded-pill mr-sm-5" type="submit">Search</Button>
          </Form>
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/ourpartners" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ paddingLeft: 0, paddingRight: 0, paddingBottom:0}}>
          <img style={{ paddingLeft: 0, paddingRight: 0, paddingBottom:0}} className="bottom_image img-fluid" src= {image} alt=""/>  
      </div>
      <Container >
        <br /><br /><br />
                <Row>
                    {spareparts.map((item, key) => {
                        return (
                            <Col md="2" key={key}>
                                <Card className="mb-4 box-shadow">
                                    <Card.Img
                                        top
                                        width="100%"
                                        src={item.src}
                                        alt={item.altText}
                                    />
                                    <Card.Body>
                                        <Card.Text>{item.description}</Card.Text>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <Button outline className="button-custom" size="sm">
                                            View
                                          </Button>
                                          <small className="text-muted">
                                              {item.time}
                                          </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
    </div>
  );
};

export default Spareparts;
