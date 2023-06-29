import React from 'react';

export default function Project(props) {
  return (
    <div class="work">
      <span>{props.name}</span>
      <a href={props.github} target="_blank" rel="noreferrer">

      <img src={props.img} alt="project"  ></img>
     
      </a>
    </div>
  );
  }