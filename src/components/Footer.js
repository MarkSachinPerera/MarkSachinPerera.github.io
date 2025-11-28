import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container text-center py-4">
        <p className="mb-1">© {new Date().getFullYear()} Mark Perera</p>
        <p className="mb-0"><a href="/" rel="noopener noreferrer">Privacy</a> · <a href="/" rel="noopener noreferrer">Terms</a></p>
      </div>
    </footer>
  );
}
