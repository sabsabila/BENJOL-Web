import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Row,
  Col,
  Alert
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { POST_BENGKEL } from "constants/urls";
import image from '../images/bawah.png';
import '../index.css';

const qs = require("qs");

const Services = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [film, setFilm] = React.useState();
  const [namaBengkel, setNamaBengkel] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    //var bodyJson = JSON.parse(requestBody);
    e.preventDefault();
    const data = qs.stringify({
      'username': username,
     'email': email,
     'password': password,
     'name': namaBengkel,
     'address': address 
     });
     var config = {
       method: 'post',
       url: POST_BENGKEL,
       headers: { },
       data : data
     };
     axios(config)
     .then(function (response) {
       console.log(response);
       if(response.status === 200)
        setShow(true);
     })
     .catch(function (error) {
       console.log(error);
     });
  }

  return (
    <div className="benjol-bg">
      <Navbar fixed="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom" >Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom" active>Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ paddingTop: 60 }} className="d-flex align-items-center">
      <Row style={{width: '100%'}}>
        <Col lg={6}></Col>
        <Col  lg={6} className="d-flex flex-column align-items-center">
          <Form onSubmit={handleSubmit} style={{width: '100%'}} className="d-flex flex-column align-items-center">
              <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                Registered Successfully !
              </Alert>
              <Form.Label style={{ paddingTop: 10 }} ><h2 style={{ color: '#636363' }}>BE OUR PARTNER</h2></Form.Label>
              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Bengkel Name</p></Form.Label>
                <Form.Control required type="text" value={namaBengkel} placeholder="Bengkel Name" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} onChange={e=>setNamaBengkel(e.target.value)} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Address</p></Form.Label>
                <Form.Control required type="text" value={address} placeholder="Address" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} onChange={e=>setAddress(e.target.value)} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Email</p></Form.Label>
                <Form.Control required type="text" value={email} placeholder="Email" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} onChange={e=>setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Username</p></Form.Label>
                <Form.Control required type="text" value={username} placeholder="Username" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} onChange={e=>setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group style={{ paddingRight: 55 }}>
                <Form.Label><p style={{ color: '#636363', paddingLeft: 10, fontSize: 14, marginBottom:'-10%' }}>Password</p></Form.Label>
                <Form.Control required type="password" value={password} placeholder="Password" className="mb-1 mr-sm-1 rounded-pill" style={{ width: '125%' }} onChange={e=>setPassword(e.target.value)}/>
              </Form.Group>

              <Button className="button-custom fa fa-search rounded-pill" type="submit">Sign Up</Button>

          </Form>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Services;
