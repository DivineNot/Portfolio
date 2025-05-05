import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Commissions from './components/Commissions';
import Terms from './components/Terms';

function useFadeInOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

function App() {
  useFadeInOnScroll();
  return (
    <div className="App">
      <Header />
      <main>
        <div className="fade-in" id="home"><Hero /></div>
        <div className="fade-in" id="services"><Services /></div>
        <div className="fade-in" id="commissions"><Commissions /></div>
        <div className="fade-in" id="terms"><Terms /></div>
      </main>
      <footer className="footer">
        © 2025 Divine. All rights reserved.
      </footer>
    </div>
  );
}

export default App; 