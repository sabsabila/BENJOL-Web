import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
<<<<<<< HEAD

import { Link, useHistory } from "react-router-dom";
import { logout } from "utils/auth";
import axios from "axios";
import { GET_FILMS } from "constants/urls";

const Dashboard = () => {
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
  }, []);

  const _onLogout = () => {
    logout();
    history.replace("/");
  };

=======
import { Link } from "react-router-dom";
import logo from '../images/horizontal-primary.png';

const Dashboard = () => {
>>>>>>> a9bf2f07275ddd66d14d139ccfa5f403036c3d2f
  return (
    <div className="benjol-bg">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/">
          <Navbar.Brand src={logo} className="benjol-brand">
              <img
                alt=""
                src={logo}
                width='180'
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" >Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      <Container >
        <Row className="d-flex float-right flex-column p-5" style={{textAlign:"right",top:"10%"}}>
          <Col md={{span:12,offset:1}} className="mt-lg-5" style={{display:"flex p-5"}}>
            <h1 style={{color:"#FCCA53"}} className="font-weight-bold">Mitra Bengkel</h1>
            <h1 style={{color:"#FCCA53"}} className="font-weight-bold">Terpercaya Untuk Anda</h1>
            <p className="font-italic" style={{marginTop:"10%"}}>BENJOL (Bengkel Jadi Online) adalah aplikasi untuk memudahkan anda</p>
            <p className="font-italic">untuk mencari bengkel motor di sekitar anda, booking jadwal service anda,</p>
            <p className="font-italic">dan mencari sparepart yang anda butuhkan.</p>
            <Link to="/spareparts">
            <Button variant="light" size="sm" className="mb-2 btn-sm font-weight-bold shadow p-3 mb-5 bg-white rounded-pill" style={{color:"#FCCA53", backgroundColor:"white", borderColor:"white"}}>Cari Sparepart</Button>
            </Link>
          </Col>
        </Row>      
      </Container>
    </div>
  );
};

export default Dashboard;
