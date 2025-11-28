import React from 'react';

import imgOpenConn from '../assets/tcpclient/openconnection-3.jpg';
import imgAdvanced from '../assets/gns3/advancedSDN.jpg';
import placeholder from '../assets/297Images/img0.jpg';

const cards = [
  {
    title: 'Chat App',
    text: 'Real-time chat application with WebSocket support, presence and message history.',
    img: imgOpenConn
  },
  {
    title: 'C Web Server',
    text: 'Low-level C webserver experiments and performance tuning.',
    img: imgAdvanced
  },
  {
    title: 'GIS Software',
    text: 'Geospatial information system tools and interactive map visualizations.',
    img: placeholder
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
