import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function SiteNavbar() {
  React.useEffect(()=>{
    try{
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('site-dark-mode', '1');
    }catch(e){ console.warn(e); }
  }, []);
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Navbar className="navbar-custom" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" onClick={scrollTo('home')}>Mark Perera</Navbar.Brand>
        <Navbar.Toggle aria-controls="site-navbar" />
        <Navbar.Collapse id="site-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" onClick={scrollTo('about')}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={scrollTo('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" onClick={scrollTo('experience')}>Experience</Nav.Link>
            {/* Dark mode is enforced by default; no toggle provided. */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// Theme toggle intentionally removed — site is dark-only.
