import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form, FormControl,
  Row,
  Col, Spinner,
  Media, Image, Alert
} 

from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { GET_BENGKEL, POST_SEARCH_BENGKEL } from "constants/urls";
import image from '../images/motor.png';
import noImage from '../images/noImage.png';

const Bengkels = () => {
const history = useHistory();
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(false);
const [bengkel, setBengkel] = React.useState();
const [keyword, setKeyword] = React.useState();
const [show, setShow] = React.useState(false);

const qs = require("qs");

  const handleClick = (e) => {
    //var bodyJson = JSON.parse(requestBody);
    e.preventDefault();
    const data = qs.stringify({
     'name': keyword
     });
     var config = {
       method: 'post',
       url: POST_SEARCH_BENGKEL,
       headers: { },
       data : data
     };
     axios(config)
      .then(function (response) {
        setLoading(false);
        //console.log(response.data);
        if(response.data.length === 0){
          setShow(true);
        }
        setBengkel(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

React.useEffect(() => {
axios
  .get(GET_BENGKEL,{
    headers:{
      
    }
  })
  .then(function (response) {
    setLoading(false);
    setBengkel(response.data);
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
      <Navbar sticky="top" bg="white" variant="light" expand="md" >
        <Container>
          <Link to="/">
            <Navbar.Brand className="benjol-brand">BENJOL | <i> Bengkel Jadi Online</i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Form inline expand="md" >
            <Form.Control value={keyword} style={{width: 400}} type="text" placeholder="Cari bengkel" size="sm" className="mb-1 mr-sm-1 rounded-pill" onChange={e=>{setKeyword(e.target.value)}} />
            <Button onClick={handleClick} size="sm" className="button-custom fa fa-search rounded-pill mr-sm-5" type="submit">Search</Button>
          </Form>
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom" active>Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <br/>
          <Button size="sm" className="button-custom rounded-pill" href="ourpartners" type="submit">Join Us!</Button> 
          <br />
        </div>
        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Not Found.</Alert.Heading>
      </Alert>
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
          ) : bengkel ? (
            bengkel
              .reduce(function (accumulator, currentValue, currentIndex, array) {
                if (currentIndex % 4 === 0)
                  accumulator.push(array.slice(currentIndex, currentIndex + 4));
                return accumulator;
              }, [])
              .map((p) => {
                return (
                  <Row >
                    {p.map((value) => {
                      return (
                        <Col md="3">
                          <Media style={{ paddingTop: 30 }}>
                            {(value.picture == null)?<img variant='rounded' width={90} height={90} src={noImage} alt="noImage"/> : <img variant='rounded' width={90} height={90} src={image} alt="bengkel"/>}
                            
                            <Media.Body>
                              <h6 style={{ paddingLeft: 10, fontSize: 16, fontWeight: "bold", color:"#FCCA53"}}>{value.name}</h6>
                              <p style={{ paddingLeft: 10, fontSize: 12}}>{value.address}</p>
                              <p className="text-muted" style={{ paddingLeft: 10, fontSize: 12}}>{value.phone_number}</p>
                            </Media.Body>
                          </Media>
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

export default Bengkels;