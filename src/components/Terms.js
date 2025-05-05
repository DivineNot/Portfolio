import React, { useState } from 'react';
import './Terms.css';

const terms = [
  { title: 'Client Requirements', content: 'Client must provide a reference or description of the asset being commissioned.' },
  { title: 'Employment Terms', content: 'All work is considered freelance unless otherwise agreed.' },
  { title: 'Legal Compliance', content: 'All commissions must comply with applicable laws.' },
  { title: 'Dispute Resolution', content: 'Disputes will be resolved through communication and mutual agreement.' },
  { title: 'Payment Terms', content: 'Payment must be made as agreed before delivery of final assets.' },
  { title: 'Refund Policy', content: 'Refunds are handled on a case-by-case basis.' },
  { title: 'Copyright Ownership', content: 'Copyright remains with the creator unless transferred by agreement.' },
  { title: 'Pricing Guidelines', content: 'Prices are subject to complexity and requirements.' },
  { title: 'Delivery and Delays', content: 'Delivery times may vary depending on workload and project scope.' },
];

function Terms() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="terms" id="terms">
      <h2 className="section-title">Terms of Service</h2>
      <div className="terms-list">
        {terms.map((item, idx) => (
          <div className="term-item" key={item.title}>
            <button className="term-title" onClick={() => setOpenIndex(idx)}>
              {item.title}
            </button>
            <div className={"term-content" + (openIndex === idx ? " open" : "")}>{item.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terms; 