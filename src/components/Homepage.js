import './homepage.css';
import SiteNavbar from './SiteNavbar';
import Hero from './Hero';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import AboutMe from './Aboutme';
import Projects from './Projects';
import Experience from './Experience';
import GitHubCorner from './GitHubCorner';
import FeatureCards from './FeatureCards';

function Homepage(){
  return (
    <div className="site-root">
      <SiteNavbar />
      <Hero />

      <section id="features" className="section features-section fade-in">
        <div className="container">
          <h2 className="text-center mb-4">Highlights</h2>
          <FeatureCards />
        </div>
      </section>

      <main>
        <section id="about" className="section about-section fade-in">
          <Container>
            <div style={{ position: 'relative' }}>
              <GitHubCorner />
              <AboutMe />
            </div>
          </Container>
        </section>

        <section id="projects" className="section projects-section fade-in">
          <Container>
            <h2 className="text-center mb-4">Projects</h2>
            <Projects />
          </Container>
        </section>

        <section id="experience" className="section experience-section fade-in">
          <Container>
            <h2 className="text-center mb-4">Experience</h2>
            <Experience />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Homepage;
