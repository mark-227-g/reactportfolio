import React from 'react';
import Project from '../project';
import '../../styles/profile.css';
import imgblog from "./../../assets/images/blog.png"
import imgnote from "./../../assets/images/note.png"
import imgstellar from "./../../assets/images/stellar.png"
import imgmeal from "./../../assets/images/mealplanner.png"
import imgweather from "./../../assets/images/weather.png"
import imgecommerce from "./../../assets/images/ecommerce.png"

export default function Portfolio() {
  return (
    <div class="container">
    <div class="row">
        <span className="col ">
        <Project name="Social Network" github="https://github.com/mark-227-g/socialnetwork" img={imgblog}></Project>
        </span>
        <span className="col ">
      <Project name="Note Taker" github="https://github.com/mark-227-g/notetaker" img={imgnote}></Project>
      </span>
        <span className="col">
        <Project name="Stellar Watch" github="https://github.com/mark-227-g/stellarwatch" img={imgstellar}></Project>
        </span>
        <span className="col">
        <Project name="Meal Planner" github="https://github.com/mark-227-g/mealplanner" img={imgmeal}></Project>
        </span>
      <span className="col">
        <Project name="Weather" github="https://github.com/mark-227-g/weatherdashboard" img={imgweather}></Project>
        </span>
        <span className="col">
        <Project name="e-Commerce" github="https://github.com/mark-227-g/ecommerce" img={imgecommerce}></Project>
        </span>
    </div>
    </div>

  );
}