import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homeBack.jpg";
import "../styles/Home.css"

function Home() {
  return( 
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div 
        className="headerContainer"
      >
        <h1> Elephant & Castle </h1>
        <p> PUB AND RESTAURANT</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )      
}

export default Home
