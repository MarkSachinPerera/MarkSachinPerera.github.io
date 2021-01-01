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
                    <Col>
                        <Container>

                        </Container>
                    </Col>
                    <Col xs={3} md={4}>
                        <Container >
                            <CardDeck className="myProfileBorder">
                                <Card >
                                    <Card.Body >
                                        <Card.Title>It's Me!</Card.Title>
                                    </Card.Body>
                                    <Card.Img variant="top" src={profilePic} className="myProfilePicture" />
                                    <Card.Footer>
                                        <small className="text-muted">Hi! &#128515;</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Container>
                    </Col>
                    <Col xs={9} md={6}>
                        <Container>
                            <Card className="text-center">
                                <Card.Header>Hi &#128400; </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        I am a 4th year Computer Engineering student at the University of Toronto. I love working in the backend and over this
                                        degree I am focusing on software and networks. I have a special interest in
                                        cybersecurity. Scroll down to see my skills, work experience and projects. The next tab will show you my resume and methods to contact me.
                                    </Card.Text>
                                    <Button variant="primary" href="https://1drv.ms/b/s!Ai49P2tnuwTUgvYZnXPNSoAyebQWRw?e=hGpabj">My Offical Resume  </Button>{' '}
                                    <Button variant="primary" href="https://github.com/MarkSachinPerera">Checkout my Github</Button>{' '}
                                    <Button variant="primary" href="https://www.linkedin.com/in/mark-perera-294b27137/">Linkedin  </Button>{' '}
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron>
                <Container>
                    <h1 className="text-center">Skills</h1>
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