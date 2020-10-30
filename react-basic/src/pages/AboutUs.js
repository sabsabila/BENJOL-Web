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
          <Link to="/dashboard">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" >Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom" active>About Us</Nav.Link>
              <Nav.Link href="/ourpartnerts" className="nav-link-custom">Our Partnerts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      <Jumbotron>
        <div class="col-12 col-md-6 col-lg-5 pb-3">
          <h3 class="font-benjol pb-2 color-yellow align-center display-5">
            Menyediakan Kebutuhan Bengkel Anda
          </h3>
          <p class="font-benjol pb-2 align-center display-5">
          Kami merasakan keresahan para pengendara motor saat terjadi masalah pada motornya. Oleh karena itu, kami memberikan 
          layanan untuk mempermudah pencarian bengkel - bengkel di sekitar. Kami juga menyediakan layanan antar - jemput untuk 
          mempermudah anda melakukan servis terhadap motor anda.
          </p>
        </div>
        <div class="col-12 col-md-12 col-lg-5 pb-3">
          <h3 class="font-benjol pb-2 color-yellow align-center display-5">
            Hubungi Kami
          </h3>
          
          <p> Benjol </p>
          <p> Benjol_id </p>
          <p> Benjol_id </p>
          <p> Benjol@gmail.com </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default AboutUs;




