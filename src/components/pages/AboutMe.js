import React from 'react';
import '../../styles/profile.css';
import myphoto from "./../../assets/images/markedwardssq.jpg"

const AboutMe =() => {
  return (
    <div>
      <h1>About Me</h1>
      <p><img id="myphoto" src={myphoto} alt="Me"></img></p>
      <p>
      Accomplished Senior Engineering Manager with extensive experience in developing Fintech application software in a multi-client environment. A distinct specialty in API Messaging and building Portals. Background in leading teams and talent management. Experience as software architect, software designer, hands-on manager, and developer. Recognized as a technical expert in the field, able to provide technical guidance and leadership across the organization. Track record of leading technology summits, committees, and strategy groups.<br/> Core Competencies include:</p>
      <p>
Software Development | Security Vulnerabilities | Fintech | API Messaging | Capacity Planning | Risk Management | Strategy | Leadership | Collaboration | Talent Management | Mentoring | Client Relations</p>
    </div>
  );
};
export default AboutMe;