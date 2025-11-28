import React from 'react';

import imgTic from '../assets/tictactoe.jpg';
import imgTic2 from '../assets/tictactoe2.jpg';
import imgAdvanced from '../assets/gns3/advancedSDN.jpg';
import placeholder from '../assets/297Images/img0.jpg';

const cards = [
  {
    title: 'Project Alpha',
    text: 'A small project showing advanced networking concepts and tooling.',
    img: imgTic
  },
  {
    title: 'Visualization',
    text: 'Interactive visualizations and lightweight animations for data.',
    img: imgTic2
  },
  {
    title: 'C Web Server',
    text: 'Low-level C webserver experiments and performance tuning.',
    img: imgAdvanced
  }
];

export default function FeatureCards(){
  React.useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.card-box'));
    if(!('IntersectionObserver' in window)){
      els.forEach(e=>e.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(e=>io.observe(e));
    return ()=> io.disconnect();
  }, []);

  return (
    <div className="card-grid">
      {cards.map((c, idx)=> (
        <article key={idx} className="card-box" aria-labelledby={`card-${idx}-title`}>
          <img src={c.img || placeholder} alt={`${c.title} screenshot`} className="card-image" loading="lazy"/>
          <div className="card-content">
            <h3 id={`card-${idx}-title`} className="card-title">{c.title}</h3>
            <p className="card-text">{c.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
