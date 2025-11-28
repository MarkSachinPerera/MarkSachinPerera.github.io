import './homepage.css';
import Container from 'react-bootstrap/Container'
import { Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import profilePic from '../assets/profilePic.jpg'



function AboutMe(params) {

    

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
                                            cybersecurity. Scroll down to see my work experience. The next tab will show you my Projects.
                                   
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

                {/* Experience section removed from AboutMe to avoid duplication with the main Experience section. */}

                {/* Experience is shown on the dedicated Experience section in the homepage to avoid duplication. */}

            </div>
    )
}

export default AboutMe;