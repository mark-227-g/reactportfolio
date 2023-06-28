import React from 'react';
import Project from '../Project';
import '../../styles/profile.css';

export default function Portfolio() {
  return (
    <div class="container">
    <div class="row">
        <span class="col ">
        <Project name="socialnetwork" github="https://github.com/mark-227-g/socialnetwork" img="./assets/images"></Project>
        </span>
        <span class="col ">
      <Project name="ecommerce" github="https://github.com/mark-227-g/ecommerce" img="./assets/images"></Project>
      </span>

        <span class="col">
        <Project name="stellarwatch" github="https://github.com/mark-227-g/stellarwatch" img="./assets/images"></Project>
        </span>
        <span class="col">
        <Project name="mealplanner" github="https://github.com/mark-227-g/mealplanner" img="./assets/images"></Project>
        </span>

      <span class="col">
        <Project name="weatherdashboard" github="https://github.com/mark-227-g/weatherdashboard" img="./assets/images"></Project>
        </span>
        <span class="col">
        <Project name="cmsblog" github="https://github.com/mark-227-g/cmsblog" img="./assets/images"></Project>
        </span>
    </div>
    </div>

  );
}