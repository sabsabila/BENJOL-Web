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
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_FILMS } from "constants/urls";
import Media from 'react-bootstrap/Media';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import gmail from '../images/gmail.png'

const AboutUs = () => {
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
    <div className="benjol-bg-sm">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" >Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom" active>About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      <Container style={{ paddingTop: 150 }}>
        <Row>
          <Col md={6} style={{paddingRight: 125}}>
            <h3 class="color-yellow" style={{fontSize: 36}}>
              Menyediakan Kebutuhan Bengkel Anda
            </h3>
            <p style={{ paddingTop: 20, fontSize: 18}} class="code">
            Kami merasakan keresahan para pengendara motor saat terjadi masalah pada motornya. Oleh karena itu, kami 
            memberikan layanan untuk mempermudah pencarian bengkel - bengkel di sekitar. Kami juga menyediakan layanan 
            antar - jemput untuk mempermudah anda melakukan servis terhadap motor anda.
            </p>
          </Col>
          <Col md={6}style={{paddingLeft: 125}}>
            <h3 style={{ paddingBottom: 20, fontSize: 36}} class="font-benjol color-yellow">
              Hubungi Kami
            </h3>
            <Media>
              <img
                width={20}
                height={20}
                src={facebook}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol</p>
              </Media.Body>
              <img
                width={20}
                height={20}
                src={twitter}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol_id</p>
              </Media.Body>
            </Media>
            <Media>
              <img
                width={20}
                height={20}
                src={instagram}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol_id</p>
              </Media.Body>
              <img
                width={20}
                height={20}
                src={gmail}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol@gmail.com</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;




