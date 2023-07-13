import React from 'react';

export default function Project(props) {
  return (
    <div className="work row">
      <div className="work-header row">{props.name}</div>
      <div className="work-body row">
      <a href={props.github} target="_blank" rel="noreferrer">
      <img src={props.img} alt="project"  ></img>
      </a>
      </div>
    </div>
  );
  }