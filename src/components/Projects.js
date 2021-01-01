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

function Projects() {
    return (

        <Container fluid="md">
            <h2>GIS Project</h2>
            <p><small>I worked in a team of 3. We used C++ and the OpenStreetMaps library for this. Our final product was able to search streets, intersections, and POI. With a Dijkstra algorithm we were
                also able to give the user directions to travel between any two points in the map.</small></p>
            <br />

            <Carousel className="w-75 h-75 center">
                <Carousel.Item >
                    <img
                        src={image0}
                        alt=""
                        className="w-100 h-auto center"
                    />
                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text">Searching for a street, POI, or an intersection</h3>
                        <h5 className="carousel-text">The user enters a partial query and presses return.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image1}
                        alt=""
                    />

                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Auto-Complete of the search</h3>
                        <h5 className="carousel-text" >The program will return results based on longest match.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image6}
                        alt=""
                    />

                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Close up view</h3>
                        <h5 className="carousel-text" >Close up view street view showing POIs and streets.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 h-auto"
                        src={image7}
                        alt=""
                    />

                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Navigation</h3>
                        <h5 className="carousel-text" >Demo of our navigation from point A to B. The directions were compiled after running Dijkstar.</h5>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <br />

            <h2>Magic Mirror Build</h2>
            <p><small>I stripped an old laptop of all non-essistenial components to create a device similar to that of a raspeberry pie. No keyboard,
            no track pad, no LCD screen. Rewired the wifi card to the main body and booted up Lubuntu with the software to run magicmirror.
            Then I connected the setup to my TV with CEC. The magicmirror modules allowed me to get quick news updates as well as display
                my calendar to keep track of my day.</small></p>

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

            <h2>Tic-Tac-Toe Game</h2>
            <p><small>In the Summer of 2018 I used java to
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
                winning.</small></p>

            <Carousel className="w-auto">
                <Carousel.Item >
                    <img
                        src={tac1}
                        alt=""
                        className="w-auto h-auto center"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-auto h-auto center"
                        src={tac2}
                        alt=""
                    />
                </Carousel.Item>

            </Carousel>

        </Container>

    );

}

export default Projects;