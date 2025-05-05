import React from 'react';
import './Hero.css';

function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('services');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero" id="home">
      <h1 className="hero-title">Divine</h1>
      <p className="hero-subtitle">I Am The Storm That Is Approaching</p>
      <div className="hero-tags">
        <span className="tag">💻 Scripting</span>
        <span className="tag">🎨 Design</span>
        <span className="tag">🚀 Optimization</span>
      </div>
      <div className="scroll-down" onClick={handleScroll} style={{cursor: 'pointer'}}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="16" stroke="#6ea8ff" strokeWidth="2" fill="#181818"/>
          <path d="M12 17L18 23L24 17" stroke="#b57aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero; 