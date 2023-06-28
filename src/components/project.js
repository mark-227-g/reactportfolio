import React from 'react';

export default function Project(props) {
  return (
    <div>
      <img src={"../assets/images/IMG5347.jpg"} alt="project" ></img>
      <p>{props.name}</p>
      <p>
        {props.github}
      </p>
    </div>
  );
  }