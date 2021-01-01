import Carousel from 'react-bootstrap/Carousel'
import image0 from '../assets/297Images/img0.jpg'
import image1 from '../assets/297Images/img1.jpg'
import image6 from '../assets/297Images/img6.jpg'
import image7 from '../assets/297Images/img7.jpg'
import Container from 'react-bootstrap/Container'

function Projects() {
    return (

        <Container fluid="md">
            <Carousel className="w-80">
                <Carousel.Item >
                    <img
                        src={image0}
                        alt=""
                        className="w-100"
                    />
                    <Carousel.Caption>
                        <h3 className="carousel-text">Searching for a street, POI, or an intersection</h3>
                        <p className="carousel-text">The user enters a partial query and presses return.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image1}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3 className="carousel-text" >Auto-Complete of the search</h3>
                        <p className="carousel-text" >The program will return results based on longest match.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image6}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3 className="carousel-text" >Third slide label</h3>
                        <p className="carousel-text" >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image7}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3 className="carousel-text" >Third slide label</h3>
                        <p className="carousel-text" >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>




    );

}

export default Projects;