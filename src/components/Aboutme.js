import './homepage.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Row, Col, Image, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import profilePic from '../assets/profilePic.jpg'
import assembly from '../assets/skill/Assembly.jpg'
import gns from '../assets/skill/GNS3-Transparent-Logo.png'
import wireshark from '../assets/skill/wireshark.jpg'
import Experience from './Experience'



function AboutMe(params) {

    var skillList = ['devicon-c-line colored', 'devicon-cplusplus-plain colored', 'devicon-css3-plain-wordmark colored', 'devicon-python-plain colored', 'devicon-mysql-plain-wordmark colored',
        'devicon-html5-plain-wordmark colored', 'devicon-react-original colored', 'devicon-linux-plain colored', 'devicon-docker-plain-wordmark colored', 'devicon-git-plain colored',
        'devicon-jenkins-plain colored', 'devicon-java-plain colored'];
    var skillList2 = [assembly, gns, wireshark]

    return (
        <div>
            <Jumbotron fluid>
                <Row>
                    <Col md={{span: 4, offset: 1}} className="center">
                        <Container >
                            <CardDeck className="myProfileBorder">
                                <Card >
                                    <Card.Body >
                                        <Card.Title>It's Me!</Card.Title>
                                    </Card.Body>
                                    <Card.Img variant="top" src={profilePic} className="myProfilePicture" />
                                    <Card.Footer>
                                        <small >Hi! &#128515;</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Col>
                    <Col  md={6} className="center aboutmeP">
                        <Container >
                            <Card  className="text-center">
                                <Card.Header>&#47;&#47; Hi &#128400; </Card.Header>
                                <Card.Body>
                                <h2>&#47;*</h2>
                                    <Card.Text>
                                    
                                        I am a 4th year Computer Engineering student at the University of Toronto. I love working in the backend and over this
                                        degree I am focusing on software and networks. I have a special interest in
                                        cybersecurity. Scroll down to see my skills and work experience. The next tab will show you my Projects.
                                   
                                    </Card.Text>
                                    <h2>*&#47;</h2>
                                    <Button className="btn-outline-secondary" href="https://1drv.ms/b/s!Ai49P2tnuwTUgvYZnXPNSoAyebQWRw?e=hGpabj">My Offical Resume  </Button>{' '}
                                    <Button className="btn-outline-secondary" href="https://github.com/MarkSachinPerera">Checkout my Github</Button>{' '}
                                    <Button className="btn-outline-secondary" href="https://www.linkedin.com/in/mark-perera-294b27137/">Linkedin  </Button>{' '}
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Jumbotron>
            <br/>
            <Jumbotron>
                <Container>
                    
                    
                        <Card fluid className="text-center">
                        <Card.Header><h1 className="text-center">Skills</h1> </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                <Row>
                                    {skillList.map((skill) => (
                                        <Col xs={2} md={2} className="p-3">
                                            <Container>
                                                <i className={skill} style={{ fontSize: "300%", alignContent: "center" }}></i>
                                            </Container>
                                        </Col>
                                    ))}
                                    {skillList2.map((skill) => (
                                        <Col xs={2} md={2} className="p-3">
                                            <Container>
                                                <Image src={skill} className="icon"></Image>
                                            </Container>
                                        </Col>
                                    ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                </Container>
            </Jumbotron>
            <Jumbotron>
                <h1 className="text-center">Experience</h1>
                <Experience />
            </Jumbotron>

        </div>
    )
}

export default AboutMe;