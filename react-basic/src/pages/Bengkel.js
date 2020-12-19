import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Row,
  Col, Spinner,Card,
  Image, Alert
} 

from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, GET_BENGKEL, POST_SEARCH_BENGKEL } from "constants/urls";

import noImage from '../images/noImage.png';
import imageEmpty from '../images/empty.png';

import logo from '../images/horizontal-primary.png';

const Bengkels = () => {

const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(false);
const [bengkel, setBengkel] = React.useState();
const [keyword, setKeyword] = React.useState();
const [show, setShow] = React.useState(false);


const qs = require("qs");

const handleClick = (e) => {

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
        console.log("a");
        setLoading(false);
        console.log(response.data);
        if(response.data.bengkels.length === 0){
          setShow(true);
        }
        setBengkel(response.data.bengkel);
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
    console.log("a");
    setLoading(false);
    setBengkel(response.data.bengkel);
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
            <Navbar.Brand src={logo} className="benjol-brand">
              <img
                alt=""
                src={logo}
                width='200'
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
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
      
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <br/>
         
          <Link to="/ourpartners">
            <Button size="sm" className="button-custom rounded-pill" type="submit">Join Us!</Button>
          </Link> 
          <br />
          
        </div>

      <Alert show={show} onClose={() => setShow(false)} dismissible>
          <Container className="d-flex justify-content-center" style={{width:'30%'}}>
            <Col className="col-md-auto" style={{marginBottom:'50em'}}>
            <Image src={imageEmpty} alt="empty sparepart"style={{width:"100%",height:"100%"}}></Image>
            <h6 style={{fontWeight:"bold"}}>Bengkel is not found in the list</h6>
            </Col>
          </Container>
      </Alert>

      <Container style={{maxHeight: "25rem", overflowX: "auto",  overflowY: "auto", position :"relative"}}>
        <br/>
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
                if (currentIndex % 5   === 0)
                  accumulator.push(array.slice(currentIndex, currentIndex + 5));
                return accumulator;
              }, [])
              .map((p) => {
                return (
                <Row className="mb-4">
                  
                  {p.map((value) => {
                       return (
                        <Col md="2">
                          <Card className="mb-2 box-shadow">
                            <Card.Body>
                             
                            {(value.profile_picture == null)
                            ? <Card.Img top width="100%"  height={100} src={noImage} alt="bengkel"  /> 
                            : <Card.Img top width="100%"  height={100} src={BASE_URL+value.profile_picture} alt="bengkel"/>}
                            <Card.Text style={{color:"#FCCA53", fontWeight: "bold"}}>{value.name}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                              <small style={{fontWeight: "bold"}}>
                                {value.address}
                              </small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                phone. {value.phone_number}
                              </small>
                            </div>
                            
                            </Card.Body>
                          </Card>
                          {value.phone_number}
                        </Col>
                      );
                
                  })}
                </Row>
              );
              })
          ) : (
            error && <Alert variant="danger">Error ba</Alert>
          )}
      </Container>
    </div>
  );
};

export default Bengkels;
