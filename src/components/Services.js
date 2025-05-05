import React from 'react';
import './Services.css';

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.5rem'}}>
    <circle cx="11" cy="11" r="11" fill="#6ea8ff"/>
    <path d="M6 12.5L10 16L16 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CrossIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '0.5rem'}}>
    <circle cx="11" cy="11" r="11" fill="#ff6e6e"/>
    <path d="M7 7L15 15M15 7L7 15" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        <div className="services-list do">
          <h3>What I Do</h3>
          <ul>
            <li><CheckIcon />Scripting</li>
            <li><CheckIcon />VFX Creation</li>
            <li><CheckIcon />Custom Solutions</li>
            <li><CheckIcon />Performance Optimization</li>
            <li><CheckIcon />Bug Fixing</li>
          </ul>
        </div>
        <div className="services-list dont">
          <h3>What I Don't Do</h3>
          <ul>
            <li><CrossIcon />Illegal Activities</li>
            <li><CrossIcon />Malicious Software</li>
            <li><CrossIcon />Copyright Infringement</li>
            <li><CrossIcon />Unethical Practices</li>
            <li><CrossIcon />Free Work</li>
            <li><CrossIcon />Rush Jobs Without Compensation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services; 