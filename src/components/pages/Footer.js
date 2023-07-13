import React from 'react';
import '../../styles/profile.css';
import iconEmail from "./../../assets/images/email.png"
import iconLinkedIn from "./../../assets/images/linkedin.png"
import iconGithub from "./../../assets/images/github.png"
export default function Footer() {
  return (
    <footer >
  <div  >
  <div id="social">
    <span>
          <a href="mailto:marko65e@gmail.com"><img class="socialicon" src={iconEmail} alt="email"/></a>
          <a target="_blank" href="https://www.linkedin.com/in/mark-charles-edwards/" rel="noreferrer"><img class="socialicon"  src={iconLinkedIn} alt="Linkedin"/></a>
          <a target="_blank" href="https://github.com/mark-227-g" rel="noreferrer"><img class="socialicon"  src={iconGithub} alt="github"/></a>
          </span>
  </div>
 </div>
   
</footer>
  )
}