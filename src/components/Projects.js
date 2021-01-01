import Carousel from 'react-bootstrap/Carousel'
import image0 from '../assets/297Images/img0.jpg'
import image1 from '../assets/297Images/img1.jpg'
import image6 from '../assets/297Images/img6.jpg'
import image7 from '../assets/297Images/img7.jpg'
import Container from 'react-bootstrap/Container'

function Projects() {
    return (

        <Container fluid="md">
            <h2>GIS Project</h2>
            <p><small>Worked in a team of 3. We used C++ and the OpenStreetMaps library for this.</small></p>
            <Carousel className="w-80">
                <Carousel.Item >
                    <img
                        src={image0}
                        alt=""
                        className="w-100"
                    />
                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text">Searching for a street, POI, or an intersection</h3>
                        <h5 className="carousel-text">The user enters a partial query and presses return.</h5> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
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
                        className="w-100"
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
                        className="w-100"
                        src={image7}
                        alt=""
                    />

                    <Carousel.Caption className="carousel-subtext">
                        <h3 className="carousel-text" >Navigation</h3>
                        <h5 className="carousel-text" >Demo of our navigation from point A to B. The directions were compiled after running Dijkstar.</h5> 
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </Container>




    );

}

export default Projects;