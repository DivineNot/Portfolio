import React from 'react';
import './Commissions.css';

const InfoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" style={{marginLeft:'0.5rem',verticalAlign:'middle'}}><circle cx="10" cy="10" r="10" fill="#23243a"/><path d="M10 6.5V6.51" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round"/><path d="M10 9V14" stroke="#6ea8ff" strokeWidth="2" strokeLinecap="round"/></svg>
);

const RobuxIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'0.7rem',verticalAlign:'middle'}}>
    <text x="7" y="24" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#111">R</text>
  </svg>
);

const PayPalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'0.7rem',verticalAlign:'middle'}}>
    <path d="M22.5 8.5c-.5-2-2.2-3-4.7-3h-5.6c-.7 0-1.3.5-1.4 1.2l-4 22.1c-.1.5.3 1 .8 1h4.2l1.1-6.1v.1c.1-.5.5-.9 1-.9h2.1c4.5 0 8-1.8 9-7.1.4-2.1.1-3.7-1-4.8-.8-.8-2-1.2-3.5-1.3zm-.2 5.2c-.7 3.7-3.4 4.1-6.5 4.1h-1.5c-.3 0-.6.2-.7.5l-1.2 6.7-.2 1.1h-2.7l3.7-20.1h5.1c1.7 0 2.8.7 3.2 2.1.2.7.2 1.5 0 2.3z" fill="#003087"/>
  </svg>
);

const NitroIcon = () => (
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'0.7rem',verticalAlign:'middle'}}>
    <circle cx="20" cy="20" r="16" fill="#5865F2"/>
    <path d="M27.5 19.5c0-2.2-1.8-4-4-4h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c2.2 0 4-1.8 4-4v-1z" fill="#fff"/>
    <path d="M18 18h4v4h-4z" fill="#5865F2"/>
  </svg>
);

const currencyIcons = {
  Robux: <RobuxIcon />,
  PayPal: <PayPalIcon />,
  Nitro: <NitroIcon />,
};

const data = [
  {
    title: 'Scripting',
    desc: 'Custom scripts and programming solutions for your projects',
    groups: [
      {
        name: 'Per Ability',
        info: true,
        prices: [
          { label: 'Robux', value: '3,000 - 12,000' },
          { label: 'PayPal', value: '$17.00 - $50.00' },
          { label: 'Nitro', value: '1 - 5' },
        ],
      },
      {
        name: 'Simple Script',
        info: true,
        prices: [
          { label: 'Robux', value: '2,000 - 30,000' },
          { label: 'PayPal', value: '$14.00 - $70.00' },
          { label: 'Nitro', value: '2 - 7' },
        ],
      },
      {
        name: 'Complicated Script',
        info: true,
        prices: [
          { label: 'Robux', value: '12,000 - 50,000' },
          { label: 'PayPal', value: '$49.00 - $110.00' },
        ],
      },
    ],
  },
  {
    title: 'VFX',
    desc: 'Visual effects to enhance the look and feel of your project',
    groups: [
      {
        name: 'Simple',
        info: true,
        prices: [
          { label: 'Robux', value: '1,500 - 5,000' },
          { label: 'PayPal', value: '$5.25 - $17.50' },
          { label: 'Nitro', value: '1 - 2' },
        ],
      },
      {
        name: 'Complex',
        info: true,
        prices: [
          { label: 'Robux', value: '5,000 - 15,000' },
          { label: 'PayPal', value: '$17.50 - $52.50' },
        ],
      },
    ],
  },
];

function Commissions() {
  return (
    <section className="commissions" id="commissions">
      <h2 className="section-title">Commission Types</h2>
      <div className="commissions-container">
        {data.map(card => (
          <div className="commission-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            {card.groups.map(group => (
              <div className="commission-group" key={group.name}>
                <div className="commission-group-title">
                  {group.name} {group.info && <InfoIcon />}
                </div>
                <div className="commission-prices-row">
                  {group.prices.map(price => (
                    <div className="commission-price-box" key={price.label}>
                      {currencyIcons[price.label]}<span className="commission-price-label">{price.label}</span>
                      <span className="commission-price-value">{price.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Commissions; 