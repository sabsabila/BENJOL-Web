import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Card,
  CardDeck,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Media from 'react-bootstrap/Media';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import gmail from '../images/gmail.png'
import call from '../images/call.png'
import whatsapp from '../images/whatsapp.png'
import logo from '../images/horizontal-primary.png';
import Akira from '../images/Akira.jpg';
import Sabila from '../images/Sabila.jpg';
import Salam from '../images/salam.jpg.jpeg';
import Lina from '../images/Linadp.jpg';
import Sylvi from '../images/Sylvi.jpg';
import  Alterra from '../images/Alterra.png';
import  MaulidanGames from '../images/MaulidanGames.png';
import  Profilku from '../images/Profilku.png';
import  PTI from '../images/PTI.png';
import  RasyidInstitute from '../images/RasyidInstitute.png';
import  RasyidTechnology from '../images/RasyidTechnologies.png';
import  Sindika from '../images/Sindika.png';
import  TrustMedis from '../images/trustmedis.png';
import  Virtuahive from '../images/Virtuahive.png';

const AboutUs = () => {
  return (
    <div className="benjol-bg-sm">
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
              <Nav.Link href="/aboutus" className="nav-link-custom" active>About Us</Nav.Link>
              <Nav.Link href="/bengkel" className="nav-link-custom">Our Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      
      <Container style={{paddingTop: 140 , maxHeight: "39rem", overflowX: "auto",  overflowY: "auto", position :"relative"}}>
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
                alt="logo-facebook"
                width={20}
                height={20}
                src={facebook}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol</p>
              </Media.Body>
              <img
                alt="logo-twitter"
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
                alt="logo-instagram"
                width={20}
                height={20}
                src={instagram}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol_id</p>
              </Media.Body>
              <img
                alt="logo-gmail"
                width={20}
                height={20}
                src={gmail}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>Benjol@gmail.com</p>
              </Media.Body>
            </Media>
            <Media>
              <img
                alt="logo-whatsapp"
                width={20}
                height={20}
                src={whatsapp}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>082145492740</p>
              </Media.Body>
              <img
                alt="logo-call"
                width={20}
                height={20}
                src={call}
              />
              <Media.Body>
                <p style={{ paddingLeft: 10}}>082145492740</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <br/>
          <h2 class="code" style={{ color: '#636363' }}>--- DEV TEAM ---</h2>
          <br />
        </div>

      <CardDeck>
        <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
          <Card.Img variant="top" width={100} height={200} src={Akira} className="rounded"/>
          <Card.Body>
            <Card.Title>I Made Akira Ivandio Agusta</Card.Title>
            <Card.Text>
              Pre-Graduate Student of Electronic Engineering Polytechnic Institute of Surabaya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Product Owner</small>
          </Card.Footer>
        </Card>
        <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
          <Card.Img variant="top" width={100} height={200} src={Sabila} className="rounded"/>
          <Card.Body>
            <Card.Title style={{fontStyle : "Bold"}}>Sabila Jamal</Card.Title>
            <Card.Text>
              Pre-Graduate Student of Electronic Engineering Polytechnic Institute of Surabaya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Development Team</small>
          </Card.Footer>
        </Card>
        <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
          <Card.Img variant="top" width={100} height={200} src={Salam} className="rounded"/>
          <Card.Body>
            <Card.Title>Andi Abdul Salam Sabil</Card.Title>
            <Card.Text>
              Pre-Graduate Student of Electronic Engineering Polytechnic Institute of Surabaya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Development Team</small>
          </Card.Footer>
        </Card>
        <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
          <Card.Img variant="top" width={100} height={200} src={Lina} className="rounded"/>
          <Card.Body>
            <Card.Title>Lina Dwi Pratiwi</Card.Title>
            <Card.Text>
              Pre-Graduate Student of Electronic Engineering Polytechnic Institute of Surabaya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Development Team</small>
          </Card.Footer>
        </Card>
        <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
          <Card.Img variant="top" width={50} height={200} src={Sylvi} className="rounded"/>
          <Card.Body>
            <Card.Title>Sylvi Indryana Safira</Card.Title>
            <Card.Text>
              Pre-Graduate Student of Electronic Engineering Polytechnic Institute of Surabaya
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Development Team</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop : 50}}>
          <br/>
          <h2 class="code" style={{ color: '#636363' }}>Sponsored By</h2>
          <br />
      </div>
        <Row>
          <Col xs={5} md={3}>
            <Image width={200} height={50} src={Virtuahive} />
          </Col>
          <Col xs={5} md={3}>
            <Image width={200} height={50} src={RasyidTechnology}/>
          </Col>
          <Col xs={5} md={3}>
            <Image width={200} height={70} src={PTI}/>
          </Col>
          <Col xs={5} md={3}>
            <Image width={200} height={50} src={MaulidanGames} />
          </Col>
        </Row>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop : 60}}>
          <br/>
            <h2 style={{ color: '#636363' }}>Supported By</h2>
          <br />
        </div>

        <Row>
          <Col xs={6} md={4}>
            <Image width={200} height={70} src={Sindika} />
          </Col>
          <Col xs={6} md={4}>
            <Image width={200} height={50} src={RasyidInstitute} />
          </Col>
          <Col xs={6} md={4}>
            <Image width={200} height={50} src={TrustMedis}/>
          </Col>
          <Col xs={6} md={4}>
            <Image width={200} height={100} src={Alterra}/>
          </Col>
          <Col xs={6} md={4}>
            <Image width={200} height={70} src={Profilku} style={{paddingTop:40}} />
          </Col>
        </Row>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop : 30}}>
          <br/>
            <h2 style={{ color: '#636363' }}>Supervisor and Mentors</h2>
          <br/>
        </div>

        <CardDeck>
          <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
            <Card.Body>
              <Card.Text>Umi Sa'adah</Card.Text>
              <Card.Text>Desy Intan Permatasari</Card.Text>
              <Card.Text>Andhik Ampuh Yunanto</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Lecturer of Electronic Engineering Polytechnic Institute of Surabaya</small>
            </Card.Footer>
          </Card>
          <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
            <Card.Body>
              <Card.Text>Maulidan Bagus Afridian Rasyid</Card.Text>
              <Card.Text>(Founder Maulidan Games dan Rasyid Technologies)</Card.Text>
              <Card.Text>Willy Achmat Fauzi</Card.Text>
              <Card.Text>(CEO Sindika)</Card.Text>
              <Card.Text>Achmad Zulkarnain</Card.Text>
              <Card.Text>(CEO dan Co-Founder TrustMedis)</Card.Text>
              <Card.Text>Arie Affianto</Card.Text>
              <Card.Text>(Founder Profilku Mobile dan Samsung Developer Warrior)</Card.Text>
              <Card.Text>Tegar Imansyah</Card.Text>
              <Card.Text>(Software RnD in System Architect Alterra)</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Industry Supervisors</small>
            </Card.Footer>
          </Card>
          <Card class="code" className="text-center" style={{borderColor:"#FCCA53"}}>
            <Card.Body>
              <Card.Text>Verent Flourencia Irene</Card.Text>
              <Card.Text>Mayshella Ainun Wakhidah</Card.Text>
              <Card.Text>Andika Ahmad Ramadhan</Card.Text>
              <Card.Text>Fandi Ahmad</Card.Text>
              <Card.Text>Ardian Kristya Pratama</Card.Text>
              <Card.Text>Angga Pradipta Kurnia Putra</Card.Text>
              <Card.Text>Muhammad Alif Pradipta ADP</Card.Text>
              <Card.Text>Rafly Arief Kanza</Card.Text>
              <Card.Text>Ahmad Jarir At Thobari</Card.Text>
              <Card.Text>Ajie Dibyo Respati</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Mentors</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default AboutUs;




