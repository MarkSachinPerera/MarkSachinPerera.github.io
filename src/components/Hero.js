import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Hero() {
  const onCTAClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header id="home" className="hero">
      <Container className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Mark Perera</h1>
          <p className="hero-subtitle">Computer Engineering student — software, networks & cybersecurity</p>
          <div className="hero-cta">
            <Button variant="primary" onClick={onCTAClick}>Learn more</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
