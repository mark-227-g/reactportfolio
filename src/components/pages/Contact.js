import React from 'react';
import '../../styles/profile.css';
import ContactForm from "../ContactForm"

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        <ContactForm />
      <ul>
          <li>Phone: 1-973-953-6258</li>
          <li><a href="mailto:marko65e@gmail.com">email: marko65e@gmail.com</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/mark-charles-edwards/" rel="noreferrer">LinkedIn: https://www.linkedin.com/in/mark-charles-edwards/</a></li>
          <li><a target="_blank" href="https://github.com/mark-227-g/challenge1" rel="noreferrer"> Github:https://github.com/mark-227-g/challenge1</a></li>
      </ul>
    </p>
    </div>
  );
}