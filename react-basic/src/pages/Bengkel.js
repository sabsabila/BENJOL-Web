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

const Bengkels = () => {
const history = useHistory();
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(false);
const [sparepart, setBengkel] = React.useState();
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjY1ZDcyMzFiYzQ3YmFjNGU3ZTM2M2M0MmE2NGUxNjZhNmIyYTI5N2FkMDNhZjlkZjRmZDcwMzZlMmYxMzI4YWVjYzMwZmQ2Y2NhNjA0YTAiLCJpYXQiOjE2MDQyMzU0NDksIm5iZiI6MTYwNDIzNTQ0OSwiZXhwIjoxNjM1NzcxNDQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.DUl5QutyWICjmN-4pDY6W5w4UbGq-BL1p7SLM3JGBpLQqupoyQ7Q4tTBkLK5fwV4eGTJnIwNYmk0Ovy7n4ICoHl3Gd0LAFxd2XNUEmQvURw5E4aqEP4tRZAm7F7EL-w-1dIlyuU9LtIhjKL1coe5U9H-J5Ne7BoUpKpjSOKrUP3zWs9WXzrLZKbexQuq4TZSUWUmU30d3roSRuIm7ZdsLkjzRNyAjNei6pyXgFFdsqdkWRSIP--sk8xF84OUWUZXyiFRXENw7qxuErLvOkFXF581wJmzHM_0WP_DLGwEcKY3Xc04GoPhSOclyj-0ZzjTY5tAqLau4Xsd17oYnWbhHRhKKo_CiWjE_IPhf68ERuNM_YWsSfsSuHp8G9XLm9B22WBIXVfhIwigE_FNaBL7WsuNbApPULZoh3HFywj8tSIskdqSz7aom_Ip3_a02B7mb8g6ZdsinxHndQCLwMFxEz_-0XkjTX7hq-GJJcAJAI5JD1pdgh-21eTpGYncYRl1YnEL9_wHKexgq4mIx3PQYRUxGwz_1shwUlzZe44DpNdOoStVaux9vtp_7L72pSMcxhEBMp9_KX3IO1ZxrrpjP36Fln3o1_wqXWaLV6ru9oZRvKhNmRJZWff9czUyNVZn_30GljIF170EANKLjGAI_yamioVu2fbbO6soK07VkgM";

React.useEffect(() => {
axios
  .get('http://127.0.0.1:8000/api/bengkel',{
    headers:{
      'Authorization' : `Bearer ${token}`
    }
  })
  .then((res) => {
    setLoading(false);
    setBengkel(res.data);
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
      <Container style={{ paddingTop: 100 }} >
      <Button size="sm" className="button-custom rounded-pill align-items-center" href="ourpartners" type="submit">Join Us!</Button> 
        
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

export default Bengkels;
