import React, { useState, useEffect } from 'react';
import './Header.css';
import clickSound from '../click.mp3';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}><path d="M3 8.5L10 3L17 8.5" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6.5" y="10.5" width="7" height="6" rx="1.5" stroke="#bfc9db" strokeWidth="1.5"/></svg>
);
const ServicesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}><circle cx="10" cy="10" r="8" stroke="#6ea8ff" strokeWidth="2"/><path d="M7 13L13 7" stroke="#bfc9db" strokeWidth="2" strokeLinecap="round"/></svg>
);
const CommissionsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}><rect x="3" y="5" width="14" height="10" rx="2" stroke="#6ea8ff" strokeWidth="2"/><path d="M7 9H13" stroke="#bfc9db" strokeWidth="2" strokeLinecap="round"/></svg>
);
const TermsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}><rect x="4" y="3" width="12" height="14" rx="2" stroke="#6ea8ff" strokeWidth="2"/><path d="M7 7H13M7 10H13M7 13H11" stroke="#bfc9db" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

const DiscordIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-3.6589-.5472-7.1978-.5472-10.8138 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276c-.598.3428-1.2195.6447-1.8722.8923a.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6601a.061.061 0 0 0-.0312-.0286ZM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189Zm7.9748 0c-1.1836 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#fff"/>
  </svg>
);

const PayPalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect width="36" height="36" rx="8" fill="none"/>
      <path d="M25.5 10.5c-0.5-2-2.2-3-4.7-3h-5.6c-0.7 0-1.3 0.5-1.4 1.2l-4 22.1c-0.1 0.5 0.3 1 0.8 1h4.2l1.1-6.1v0.1c0.1-0.5 0.5-0.9 1-0.9h2.1c4.5 0 8-1.8 9-7.1 0.4-2.1 0.1-3.7-1-4.8-0.8-0.8-2-1.2-3.5-1.3zm-0.2 5.2c-0.7 3.7-3.4 4.1-6.5 4.1h-1.5c-0.3 0-0.6 0.2-0.7 0.5l-1.2 6.7-0.2 1.1h-2.7l3.7-20.1h5.1c1.7 0 2.8 0.7 3.2 2.1 0.2 0.7 0.2 1.5 0 2.3z" fill="#fff"/>
    </g>
  </svg>
);

const navLinks = [
  { href: '#home', label: 'Home', icon: <HomeIcon /> },
  { href: '#services', label: 'Services', icon: <ServicesIcon /> },
  { href: '#commissions', label: 'Commissions', icon: <CommissionsIcon /> },
  { href: '#terms', label: 'Terms', icon: <TermsIcon /> },
];

const playClick = () => {
  const audio = new Audio(clickSound);
  audio.volume = 0.3;
  audio.play();
};

function Header() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    document.body.style.background = dark
      ? '#090909'
      : '#f5f6fa';
    document.body.style.color = dark
      ? '#fff'
      : '#222';
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.href.replace('#', ''));
        if (!el) return 0;
        return el.getBoundingClientRect().top - 120;
      });
      const idx = offsets.findIndex(offset => offset > 0);
      setActive(idx === -1 ? navLinks[navLinks.length - 1].href : navLinks[Math.max(0, idx - 1)].href);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playClick();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
      setActive(href);
    }
  };

  return (
    <header className="header">
      <div className="logo">Divine</div>
      <nav className="nav">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={
              (active === link.href ? 'active ' : '') +
              (link.label === 'Services' ? 'services-link' : '')
            }
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.icon} {link.label}
          </a>
        ))}
        <a
          href="https://discord.gg/w62Bbxvy"
          className="discord-btn-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginLeft:'0.7rem',display:'flex',alignItems:'center',justifyContent:'center',transition:'background 0.2s'}}
        >
          <DiscordIcon />
        </a>
        <a
          href="https://www.paypal.com/paypalme/DivineEmperor00"
          className="paypal-btn-icon"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginLeft:'0.3rem',display:'flex',alignItems:'center',justifyContent:'center',transition:'background 0.2s'}}
        >
          <PayPalIcon />
        </a>
      </nav>
      <button className="theme-toggle" aria-label="Переключить тему" onClick={() => setDark(d => !d)}>
        <span role="img" aria-label="theme">{dark ? '🌞' : '🌙'}</span>
      </button>
    </header>
  );
}

export default Header; 