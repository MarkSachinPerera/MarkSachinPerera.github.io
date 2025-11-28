import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function SiteNavbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home" onClick={scrollTo('home')}>Mark Perera</Navbar.Brand>
        <Navbar.Toggle aria-controls="site-navbar" />
        <Navbar.Collapse id="site-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={scrollTo('about')}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={scrollTo('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" onClick={scrollTo('experience')}>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
