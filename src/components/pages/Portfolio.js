import React from 'react';
import Project from '../Project';
import '../../styles/profile.css';

export default function Portfolio() {
  return (
    <div class="container">
    <div class="row">
        <span class="col ">
        <Project name="Social Network" github="https://github.com/mark-227-g/socialnetwork" img="./assets/images/blog.png"></Project>
        </span>
        <span class="col ">
      <Project name="Note Taker" github="https://github.com/mark-227-g/notetaker" img="./assets/images/ecommerce.png"></Project>
      </span>
        <span class="col">
        <Project name="Stellar Watch" github="https://github.com/mark-227-g/stellarwatch" img="./assets/images/stellar.png"></Project>
        </span>
        <span class="col">
        <Project name="Meal Planner" github="https://github.com/mark-227-g/mealplanner" img="./assets/images/mealplanner.png"></Project>
        </span>
      <span class="col">
        <Project name="Weather" github="https://github.com/mark-227-g/weatherdashboard" img="./assets/images/weather.png"></Project>
        </span>
        <span class="col">
        <Project name="e-Commerce" github="https://github.com/mark-227-g/ecommerce" img="./assets/images/ecommerce.png"></Project>
        </span>
    </div>
    </div>

  );
}