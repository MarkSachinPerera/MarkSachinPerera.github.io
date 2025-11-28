import React from 'react';
import uoftLogo from '../assets/logos/uoft-logo-clean.svg';
import ecccLogo from '../assets/logos/environment-canada-logo.svg';

const experiences = [
  {
    id: 'degree',
    title: 'Computer Engineering Student',
    subtitle: 'University of Toronto — Toronto, ON',
    img: uoftLogo,
    details: 'Pursuing a Computer Engineering degree at the University of Toronto. Focus areas include software systems, networks, and cybersecurity.'
  },
  {
    id: 'eccc',
    title: 'Environment and Climate Change Canada',
    subtitle: 'Intern — Toronto, ON (2019 - 2020)',
    img: ecccLogo,
    details: 'Internship as a software developer at ECCC, working on internal tooling and data processing pipelines.'
  }
];

function Experience(){
  const [open, setOpen] = React.useState(null);

  return (
    <div>
      <div className="exp-grid">
        {experiences.map(exp => (
          <button key={exp.id} className="exp-card" onClick={() => setOpen(exp)} aria-haspopup="dialog" aria-label={`Open ${exp.title} details`}>
            <div className="exp-card-media">
              <img src={exp.img} alt={exp.title} loading="lazy" />
            </div>
            <div className="exp-card-body">
              <h3 className="exp-card-title">{exp.title}</h3>
              <p className="exp-card-sub">{exp.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="exp-modal" role="dialog" aria-modal="true" aria-labelledby="exp-modal-title">
          <div className="exp-modal-backdrop" onClick={() => setOpen(null)} />
          <div className="exp-modal-content">
            <button className="exp-modal-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
            <div className="exp-modal-hero">
              <img src={open.img} alt={open.title} />
            </div>
            <div className="exp-modal-body">
              <h2 id="exp-modal-title">{open.title}</h2>
              <h4 className="carousel-subtext">{open.subtitle}</h4>
              <p className="carousel-text">{open.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;