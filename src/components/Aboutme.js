import './homepage.css';
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
                {/* Replace Jumbotron with semantic sections to support modern Bootstrap and accessibility */}
                <section className="about-me py-5">
                    <Container fluid>
                    <Row>
                        <Col md={{span: 4, offset: 1}} className="center">
                            <Container >
                                <CardDeck className="myProfileBorder">
                                    <Card >
                                        <Card.Body >
                                            <Card.Title>It's Me!</Card.Title>
                                        </Card.Body>
                                        <Card.Img variant="top" src={profilePic} className="myProfilePicture" loading="lazy" alt="Profile picture" />
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
                                            Hi, my name is Mark Perera. This is my personal web page showing my resume
                                            and projects I have done. 
                                            I am a 4th year Computer Engineering student at the University of Toronto. I love working in the backend and over this
                                            degree I am focusing on software and networks. I have a special interest in
                                            cybersecurity. Scroll down to see my skills and work experience. The next tab will show you my Projects.
                                   
                                        </Card.Text>
                                        <h2>*&#47;</h2>
                                        <Button variant="outline-secondary" href="https://1drv.ms/b/s!Ai49P2tnuwTUgvYZnXPNSoAyebQWRw?e=hGpabj">My Offical Resume</Button>{' '}
                                        <Button variant="outline-secondary" href="https://github.com/MarkSachinPerera">Checkout my Github</Button>{' '}
                                        <Button variant="outline-secondary" href="https://www.linkedin.com/in/mark-perera-294b27137/">Linkedin</Button>{' '}
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                    </Container>
                </section>

                <section className="custom-skills py-5" aria-labelledby="skills-heading">
                    <Container>
                        <h1 id="skills-heading" className="text-center">Skills</h1>
                        <Row>
                            {skillList.map((skill, idx) => (
                                <Col key={idx} xs={4} sm={3} md={2} className="p-3 text-center">
                                    <i className={skill} style={{ fontSize: "300%" }} aria-hidden="true"></i>
                                </Col>
                            ))}
                        {skillList2.map((skill, idx) => (
                            <Col key={`s2-${idx}`} xs={4} sm={3} md={2} className="p-3 text-center">
                                <Image src={skill} className="icon" alt="skill icon" loading="lazy" />
                            </Col>
                        ))}
                        </Row>
                    </Container>
                </section>

                <section className="experience-section py-5" aria-labelledby="experience-heading">
                    <Container>
                        <h1 id="experience-heading" className="text-center">Experience</h1>
                        <Experience />
                    </Container>
                </section>

            </div>
    )
}

export default AboutMe;