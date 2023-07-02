import React from 'react';
import '../../styles/profile.css';

export default function Footer() {
  return (
    <footer >
  <div class="container" >
  <div id="social">
          <span class="col "><a href="mailto:marko65e@gmail.com"><img class="socialicon" src={"../assets/images/email.png"} alt="email"/></a></span>
          <span class="col "><a target="_blank" href="https://www.linkedin.com/in/mark-charles-edwards/" rel="noreferrer"><img class="socialicon"  src={"../assets/images/linkedin.png"} alt="Linkedin"/></a></span>
          <span class="col "><a target="_blank" href="https://github.com/mark-227-g" rel="noreferrer"><img class="socialicon"  src={"../assets/images/github.png"} alt="github"/></a></span>
  </div>
 </div>
   
</footer>
  )
}