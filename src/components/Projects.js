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
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image1}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image6}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image7}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>




    );

}

export default Projects;