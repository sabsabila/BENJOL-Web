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
import { GET_FILMS } from "constants/urls";
import image from '../images/motor.png';
import spareparts from '../data/spareparts';

const Spareparts = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sparepart, setSparepart] = React.useState();
  var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjY1ZDcyMzFiYzQ3YmFjNGU3ZTM2M2M0MmE2NGUxNjZhNmIyYTI5N2FkMDNhZjlkZjRmZDcwMzZlMmYxMzI4YWVjYzMwZmQ2Y2NhNjA0YTAiLCJpYXQiOjE2MDQyMzU0NDksIm5iZiI6MTYwNDIzNTQ0OSwiZXhwIjoxNjM1NzcxNDQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.DUl5QutyWICjmN-4pDY6W5w4UbGq-BL1p7SLM3JGBpLQqupoyQ7Q4tTBkLK5fwV4eGTJnIwNYmk0Ovy7n4ICoHl3Gd0LAFxd2XNUEmQvURw5E4aqEP4tRZAm7F7EL-w-1dIlyuU9LtIhjKL1coe5U9H-J5Ne7BoUpKpjSOKrUP3zWs9WXzrLZKbexQuq4TZSUWUmU30d3roSRuIm7ZdsLkjzRNyAjNei6pyXgFFdsqdkWRSIP--sk8xF84OUWUZXyiFRXENw7qxuErLvOkFXF581wJmzHM_0WP_DLGwEcKY3Xc04GoPhSOclyj-0ZzjTY5tAqLau4Xsd17oYnWbhHRhKKo_CiWjE_IPhf68ERuNM_YWsSfsSuHp8G9XLm9B22WBIXVfhIwigE_FNaBL7WsuNbApPULZoh3HFywj8tSIskdqSz7aom_Ip3_a02B7mb8g6ZdsinxHndQCLwMFxEz_-0XkjTX7hq-GJJcAJAI5JD1pdgh-21eTpGYncYRl1YnEL9_wHKexgq4mIx3PQYRUxGwz_1shwUlzZe44DpNdOoStVaux9vtp_7L72pSMcxhEBMp9_KX3IO1ZxrrpjP36Fln3o1_wqXWaLV6ru9oZRvKhNmRJZWff9czUyNVZn_30GljIF170EANKLjGAI_yamioVu2fbbO6soK07VkgM";

  // axios.defaults.headers.common['X-Auth-Token'] =
  // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjY1ZDcyMzFiYzQ3YmFjNGU3ZTM2M2M0MmE2NGUxNjZhNmIyYTI5N2FkMDNhZjlkZjRmZDcwMzZlMmYxMzI4YWVjYzMwZmQ2Y2NhNjA0YTAiLCJpYXQiOjE2MDQyMzU0NDksIm5iZiI6MTYwNDIzNTQ0OSwiZXhwIjoxNjM1NzcxNDQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.DUl5QutyWICjmN-4pDY6W5w4UbGq-BL1p7SLM3JGBpLQqupoyQ7Q4tTBkLK5fwV4eGTJnIwNYmk0Ovy7n4ICoHl3Gd0LAFxd2XNUEmQvURw5E4aqEP4tRZAm7F7EL-w-1dIlyuU9LtIhjKL1coe5U9H-J5Ne7BoUpKpjSOKrUP3zWs9WXzrLZKbexQuq4TZSUWUmU30d3roSRuIm7ZdsLkjzRNyAjNei6pyXgFFdsqdkWRSIP--sk8xF84OUWUZXyiFRXENw7qxuErLvOkFXF581wJmzHM_0WP_DLGwEcKY3Xc04GoPhSOclyj-0ZzjTY5tAqLau4Xsd17oYnWbhHRhKKo_CiWjE_IPhf68ERuNM_YWsSfsSuHp8G9XLm9B22WBIXVfhIwigE_FNaBL7WsuNbApPULZoh3HFywj8tSIskdqSz7aom_Ip3_a02B7mb8g6ZdsinxHndQCLwMFxEz_-0XkjTX7hq-GJJcAJAI5JD1pdgh-21eTpGYncYRl1YnEL9_wHKexgq4mIx3PQYRUxGwz_1shwUlzZe44DpNdOoStVaux9vtp_7L72pSMcxhEBMp9_KX3IO1ZxrrpjP36Fln3o1_wqXWaLV6ru9oZRvKhNmRJZWff9czUyNVZn_30GljIF170EANKLjGAI_yamioVu2fbbO6soK07VkgM';

  React.useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/sparepart',{
        headers:{
          'Authorization' : `Bearer ${token}`
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
            <Form.Control type="text" placeholder="Cari bengkel..." size="sm" className="col-lg mb-1 mr-sm-1 rounded-pill " />
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
