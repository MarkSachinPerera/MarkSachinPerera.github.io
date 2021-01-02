import './homepage.css';
import Container from 'react-bootstrap/Container'
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import AboutMe from './Aboutme'
import Projects from './Projects'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Homepage() {

  return (
    <div >



      <Tab.Container defaultActiveKey="Home">
        <Nav fill variant="tabs" className=" bg-dark ">
          <Nav.Item>
            <Nav.Link eventKey="Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="AboutMe">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Projects">Projects</Nav.Link>
          </Nav.Item>
          
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="Home">
            <div className="bgImage" >
              <Container fluid>
                <Row>
                  <Col md={5}>
                    <h1>&#47;&#47; Welcome!</h1>
                    <h4>
                    &#47;* Hi, my name is Mark Perera. This is my personal web page showing my resume
                      and projects I have done. *&#47;</h4>
                  </Col>
                </Row>


              </Container>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="AboutMe">
            <AboutMe />
          </Tab.Pane>

          <Tab.Pane eventKey="Projects">
            <Jumbotron>
              <h1 className="text-center">Projects</h1>
              <br />
              <Projects />
            </Jumbotron>
          </Tab.Pane>



        </Tab.Content>
      </Tab.Container>


    </div >


  );
}


export default Homepage;
