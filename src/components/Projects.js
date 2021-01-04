import Carousel from 'react-bootstrap/Carousel'
import image0 from '../assets/297Images/img0.jpg'
import image1 from '../assets/297Images/img1.jpg'
import image6 from '../assets/297Images/img6.jpg'
import image7 from '../assets/297Images/img7.jpg'
import Container from 'react-bootstrap/Container'
import magic1 from '../assets/Screenshot_20200815-223203_Instagram.jpg'
import magic2 from '../assets/20200606_220442.jpg'
import tac1 from '../assets/tictactoe.jpg'
import tac2 from '../assets/tictactoe2.jpg'
import Button from 'react-bootstrap/Button'
import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.jpg'
import chef3 from '../assets/chef3.jpg'
import Card from 'react-bootstrap/Card'
import tcp1 from '../assets/tcpclient/openconnection-3.jpg'
import tcp2 from '../assets/tcpclient/openconnection-4.jpg'

function Projects() {
    return (

        <Container fluid="md">

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; GIS Project </Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            I worked in a team of 3. We used C++ and the OpenStreetMaps library for this. Our final product was able to search streets, intersections, and POI. With a Dijkstra algorithm we were
                            also able to give the user directions to travel between any two points in the map.
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                        </Card.Body>
                </Card>
            </Container>
            <br/>

            <Carousel className="w-75 h-75 center">
                <Carousel.Item >
                    <img
                        src={image0}
                        alt=""
                        className="w-100 h-auto center"
                    />
                    {/* <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text">Searching for a street, POI, or an intersection</h3>
                        <h5 className="carousel-text">The user enters a partial query and presses return.</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image1}
                        alt=""
                    />

                    {/* <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Auto-Complete of the search</h3>
                        <h5 className="carousel-text" >The program will return results based on longest match.</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image6}
                        alt=""
                    />

                    {/* <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Close up view</h3>
                        <h5 className="carousel-text" >Close up view street view showing POIs and streets.</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image7}
                        alt=""
                    />

                    {/* <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Navigation</h3>
                        <h5 className="carousel-text" >Demo of our navigation from point A to B. The directions were compiled after running Dijkstar.</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>

            </Carousel>

            <br />

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; TCP Client </Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            I built a centralized TCP messaging client over the summer for a small side project. This was written in C. This supports 5 concurrent connections. I limit it to 5 to make the workload
                            manageable. Also, this is multithread. The main thread accepts connection the rest to allocated on a per connection basis.
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                        </Card.Body>
                </Card>
            </Container>
            <br/>

            <Carousel className="w-100 h-50">
                <Carousel.Item >
                    <img
                        src={tcp1}
                        alt=""
                        className="w-100 h-50 center"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-50 center"
                        src={tcp2}
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>

            <br/>

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; Magic Mirror Build </Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            I stripped an old laptop of all non-essistenial components to create a device similar to that of a raspeberry pie. No keyboard,
                             no track pad, no LCD screen. Rewired the wifi card to the main body and booted up Lubuntu with the software to run magicmirror.
                             Then I connected the setup to my TV with CEC. The magicmirror modules allowed me to get quick news updates as well as display
                              my calendar to keep track of my day.
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                        </Card.Body>
                </Card>
            </Container>
            <br/>

            <Carousel className="w-auto">
                <Carousel.Item >
                    <img
                        src={magic1}
                        alt=""
                        className="w-50 h-75 center"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-auto center"
                        src={magic2}
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>

            <br />

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; Tic-Tac-Toe Game </Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            In the Summer of 2018 I used java to
                            release my very own Tic Tac Toe game
                            on the android application store. The game has a built in AI for its single player game mode. The AI
                            can be
                            disabled and enabled
                            by the user as needed. My goal was to provide a formidable opponent that will take multiple tries to
                            out
                            maneuver and defeat.
                            In addition, the game provides the user with directions indicating the next player and prompts the user
                            when the game ends. When
                            there is a win or loss the game has a designated score board that keeps track of which player is
                              winning.
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                            <Button className="btn-outline-secondary" href="https://play.google.com/store/apps/details?id=com.markperera.tictactoe">Go to the Playstore </Button>{' '}
                        </Card.Body>
                </Card>
            </Container>

            <br/>

            

            <Carousel className="w-75 center">
                <Carousel.Item >
                    <img
                        src={tac1}
                        alt=""
                        className="w-75 h-auto center"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75 h-auto center"
                        src={tac2}
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>

            <br/>

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; Chef-co Pilot </Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            This was a class project. I worked in a group of 3 people. Our task was to interview potential stakeholders such as students and grocery store workers
                             and create a web application that can help students to better manage their time.
                
                             I was the a frontend developer for this project and we used ReactJs to build the user interface. This is hosted on herko. Due to unseen circumstances the backend was never fully completed.
                             Due to this, the site does not have the fully polised finish I was hoping.
                
                            (give the site some time to load).
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                            <Button className="btn-outline-secondary" href="https://chef-copilot.herokuapp.com/Recipes">Visit the site </Button>{' '}
                        </Card.Body>
                </Card>
            </Container>
            
            <br/>
            <br/>
            <Carousel className="w-100 h-100">
                <Carousel.Item >
                    <img
                        src={chef1}
                        alt=""
                        className="w-75 h-50 center"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75 h-50 center"
                        src={chef2}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75 h-50 center"
                        src={chef3}
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>

            <br/>

            <Container fluid>
                <Card fluid className="text-center">
                    <Card.Header>&#47;&#47; Search Engine</Card.Header>
                        <Card.Body>
                            <h2>&#47;*</h2>
                            <Card.Text>
            
                            As a part of my programming languages course, my teammate and I designed a search engine that we
                             deployed through AWS.
                             Our primary languages included HTML, Redis, CSS, and python. My main focus was on the backend. I implemented a crawler and page
                            ranker that ran at startup to build our databases that provided information to the frontend.
        
                            </Card.Text>
                            <h2>*&#47;</h2>
                            <Button className="btn-outline-secondary" href="https://github.com/MarkSachinPerera/CSC326">Visit the Repository </Button>{' '}
                        </Card.Body>
                </Card>
            </Container>
            
            <br/>

        </Container>

    );

}

export default Projects;