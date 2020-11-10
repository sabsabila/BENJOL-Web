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
import { GET_SPAREPART , POST_SEARCH_SPAREPART} from "constants/urls";
import image from '../images/motor.png';
import imageEmpty from '../images/empty.png';
import noImage from '../images/noImage.png';
import sourceImage from '../images/motor.png';

const Spareparts = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sparepart, setSparepart] = React.useState();
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
       url: POST_SEARCH_SPAREPART,
       headers: { },
       data : data
     };
     axios(config)
      .then(function (response) {
        setLoading(false);
        console.log(response.data);
        if(response.data.length === 0){
          setShow(true);
        }
        setSparepart(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    React.useEffect(() => {
    axios
      .get(GET_SPAREPART,{
        headers:{
        }
      })
      .then((response) => {
        setLoading(false);
        setSparepart(response.data);
        console.log(response.data.picture);
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
            <Form.Control value={keyword} style={{width: 400}} type="text" placeholder="Cari sparepart" size="sm" className="mb-1 mr-sm-1 rounded-pill" onChange={e=>{setKeyword(e.target.value)}} />
            <Button onClick={handleClick} size="sm" className="button-custom fa fa-search rounded-pill mr-sm-5" type="submit">Search</Button>
          </Form>
          <Nav className="ml-auto benjol-brand">
              <Nav.Link href="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Not Found.</Alert.Heading>
      </Alert>
     
      <Container style={{maxHeight: "25rem", overflowX: "auto",  overflowY: "auto", position :"relative"}}>
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
                            {(value.picture == null)?<Card.Img top width="100%" src={noImage} alt="sparepart"  /> : <Card.Img top width="100%" src={value.picture} alt="sparepart"  />}
                            <Card.Text style={{color:"#FCCA53", fontWeight: "bold"}}>{value.name}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                              <small style={{fontWeight: "bold"}}>
                                {value.bengkel}
                              </small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <small>
                                {value.address}
                              </small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
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
          // error && <Alert variant="danger">Error bang</Alert>
         <Container className="d-flex justify-content-center" style={{width:'30%'}}>
           <Col className="col-md-auto" style={{marginBottom:'50em'}}>
          <img src={imageEmpty} alt="empty sparepart"style={{width:"100%",height:"100%"}}></img>
          <h6 style={{fontWeight:"bold"}}>No items in sparepart lists</h6>
         </Col>
         </Container>
        )}
      </Container>
    </div>
  );
};

export default Spareparts;